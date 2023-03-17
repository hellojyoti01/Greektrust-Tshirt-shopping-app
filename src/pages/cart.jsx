import s from "../styles/cart.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "@/store/productSlice";
import { useNotification } from "@/context/NotificationProvider";
import Navigation from "@/components/Navigation";
function cart() {
	const { showNotification } = useNotification();
	const dispatch = useDispatch();
	const { cart, totalCart } = useSelector((store) => {
		const { cart = [], totalCart } = store.product;

		return { cart, totalCart };
	});

	const handelDelete = (e) => {
		dispatch(deleteCart(e.target.getAttribute("id_name")));
		showNotification({
			type: "success",
			title: "",
			message: "One Item Removed",
		});
	};

	return (
		<>
			<div className={s.container}>
				<div className={s.nav}>
					<Navigation />
				</div>
				<h3>Shopping Cart</h3>
				<div className={s.wrapper}>
					{cart.map((el) => {
						return (
							<div className={s.cart}>
								<div className={s.cart_Image}>
									<img src={el.imageURL} alt='CartImage' />
								</div>
								<div className={s.cartText}>
									<p>{el.name}</p>
									<p>{el.price}</p>
								</div>
								<button className={s.quantityBtn}>
									Qty {el.quantity}
									<span>{"<"}</span>{" "}
								</button>
								<button
									className={s.deleteBtn}
									onClick={(e) => handelDelete(e)}
									id_name={el.id}
								>
									Delete
								</button>
							</div>
						);
					})}
					<hr className={s.linebar} />

					<div>Total Amount {totalCart}</div>
				</div>
			</div>
		</>
	);
}

export default cart;
