import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "../styles/Aside.module.css";
import { filterProduct, clearFilter } from "@/store/productSlice";
function Aside({}) {
	const dispatch = useDispatch();
	const [filter, setFilter] = useState({
		_name: "",
		value: "",
	});
	let _color = ["Red", "Blue", "Green"];
	let _Gender = ["Men", "Women"];
	let _Price = ["250", "251-400", "450"];
	let _Type = ["Polo", "Hoodie", "Basic"];

	const handelClick = (e) => {
		if (e.target.checked) {
			let name = e.target.title;
			setFilter({ ...filter, _name: name, value: e.target.name });
		} else {
			dispatch(clearFilter());
		}
	};

	useEffect(() => {
		if (filter._name) {
			dispatch(filterProduct(filter));
		}
	}, [filter]);
	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<h2 className={s.heading}>Color</h2>
				<ul className={s.list}>
					{_color.map((el, idx) => {
						return (
							<div className={s.filter} key={idx}>
								<input
									type='checkBox'
									onClick={(e) => handelClick(e)}
									name={el}
									title='color'
								/>{" "}
								{el}
							</div>
						);
					})}
				</ul>
				<h2 className={s.heading}>Gender</h2>
				<ul className={s.list}>
					{_Gender.map((el, idx) => {
						return (
							<div className={s.filter} key={idx}>
								<input
									type='checkBox'
									name={el}
									title='gender'
									onClick={(e) => handelClick(e)}
								/>{" "}
								{el}
							</div>
						);
					})}
				</ul>
				<h2 className={s.heading}>Price</h2>
				<ul className={s.list}>
					{_Price.map((el, idx) => {
						return (
							<div className={s.filter} key={idx}>
								<input
									type='checkBox'
									name={el}
									title='price'
									onClick={(e) => handelClick(e)}
								/>{" "}
								Rs.{el}
							</div>
						);
					})}
				</ul>
				<h2 className={s.heading}>Type</h2>
				<ul className={s.list}>
					{_Type.map((el, idx) => {
						return (
							<div className={s.filter} key={idx}>
								<input
									type='checkBox'
									name={el}
									title='type'
									onClick={(e) => handelClick(e)}
								/>{" "}
								{el}
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Aside;
