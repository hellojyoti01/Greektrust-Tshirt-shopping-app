import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import s from "../styles/notification.module.css";

const Notification = createContext();

const NotificationCard = ({ notification }) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`${s.flayer} ${show ? s.slide_In : s.slide_Out}`}
			style={
				notification.type === "error"
					? { backgroundColor: "red" }
					: { backgroundColor: "yellow" }
			}
		>
			<h6>{notification.title}</h6>
			<p>{notification.message}</p>
		</div>
	);
};

function NotificationProvider({ children }) {
	const [notifications, setNotification] = useState([]);

	const showNotification = (notification) => {
		const id = Math.random().toString(36).substr(2, 9);

		setNotification((prev) => {
			return [...prev, { ...notification, id }];
		});
	};

	console.log(notifications, "newNotiFication Add");
	console.log(notifications.length, "Length Of Notification");
	useEffect(() => {
		console.log("Use Effect Execute");
		const timer = setTimeout(() => {
			setNotification((prev) => {
				const [, ...rest] = prev;
				console.log(rest, "rest From setNotification");
				return rest;
			});
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [notifications.length]);
	const value = {
		showNotification,
	};
	return (
		<Notification.Provider value={value}>
			<div className={s.notification_pannel}>
				{notifications.map((el) => {
					return <NotificationCard key={el.id} notification={el} />;
				})}
			</div>
			{children}
		</Notification.Provider>
	);
}

const useNotification = () => {
	const value = useContext(Notification);
	return value;
};

export { useNotification };
export default NotificationProvider;
