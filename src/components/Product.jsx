import React from "react";
import s from "../styles/Menu.module.css";
import { useNotification } from "@/context/NotificationProvider";
import { memo } from "react";
import { addOneCart } from "@/store/productSlice";
import { useDispatch } from "react-redux";

function Product({ product }) {
	// console.log(product);
	const { showNotification } = useNotification();
	const dispatch = useDispatch();
	const handelClick = (e) => {
		if (e.target.innerText !== "Add To Cart") {
			showNotification({
				type: "Error",
				title: "product",
				message: "Out Of Stock",
			});
		}

		dispatch(addOneCart(e.target.title));
		showNotification({
			type: "success",
			title: "product",
			message: "Add Successfully",
		});

		// return alert("Add To Cart");
	};
	//hr@webskitters.com ===>

	return (
		<div className={s.product_container}>
			{product.map((el, idx) => {
				return (
					<div className={s.wrapper} key={el.id}>
						<div className={s.top_box}>
							<h2>{el.name}</h2>
							<img src={el.imageURL} alt={el.name} className={s.img} />
						</div>
						<div className={s.buttom_box}>
							<span>Rs.{el.price}</span>
							<button onClick={(e) => handelClick(e)} title={el.id}>
								{el.quantity ? "Add To Cart" : "Out Of Stock"}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default memo(Product);
