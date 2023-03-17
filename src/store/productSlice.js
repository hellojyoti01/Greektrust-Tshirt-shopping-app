import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	product: [],
	cart: [],
	totalCart: 0,
	filter_product: [],
	status: "idle",
	error: null,
	loading: true,
};

//*Fast Time Url Load Fetch The Product Use End Point
export const fetchProduct = createAsyncThunk(
	"products/fetchProduct",
	async (parameter, store) => {
		const { data } = await axios.get(
			"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
		);

		return data;
	}
);

export const productSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {
		//* Product Filter acording to user Input Check Box
		filterProduct: (state, action) => {
			let { _name, value } = action.payload;
			//* Filter The item to product array and push the filterd array
			let _filter = state.product.filter((item) => {
				if (_name == "price") {
					let new_value = value.split("-");
					if (new_value.length == 1) {
						if (new_value[0] == "450") return item[_name] >= new_value[0];
						return item[_name] == new_value[0];
					} else {
						return item[_name] >= new_value[0] && item[_name] <= new_value[1];
					}
				}
				return item[_name] === value;
			});

			state.filter_product = _filter;
			state.loading = false;
		},

		//* Filter Product By Query
		filterProductQuery: (state, action) => {
			let _filter = state.product.filter((el) => {
				if (el.name.toLowerCase().match(action.payload.toLowerCase())) {
					return el;
				}
			});

			state.filter_product = _filter;
			state.loading = false;
		},
		//*Fired When user OnClick on Checkbox
		clearFilter: (state, action) => {
			state.filter_product = [];
			state.loading = false;
		},

		//* Add a single product to cart if already exit only increase quantity and price also remove one quanty from product array
		addOneCart: (state, action) => {
			const product = state.product.find((el) => {
				return el.id == action.payload;
			});

			let productIdx = state.cart.findIndex((el) => {
				return el.id === product.id;
			});

			if (productIdx !== -1) {
				state.cart[productIdx].quantity += 1;
				state.totalCart += product.price;
			} else {
				state.cart.push({ ...product, quantity: 1 });
				state.totalCart += product.price;
			}

			state.product[action.payload - 1].quantity -= 1;
		},

		removeOneCart: (state, action) => {},

		//* if More then one quantity present in cart then decrease quantity and price

		deleteCart: (state, action) => {
			let productIdx = state.cart.findIndex((el) => {
				return el.id == action.payload;
			});

			if (state.cart[productIdx].quantity > 1) {
				state.cart[productIdx].quantity -= 1;
				state.totalCart -= state.cart[productIdx].price;
			} else {
				let newCart = state.cart.filter((el) => {
					return el.id != action.payload;
				});
				state.totalCart -= state.cart[productIdx].price;
				state.cart = newCart;
			}
		},
	},

	//* extra reucer use for async operation redux tool kit
	extraReducers: (builder) => {
		builder.addCase(fetchProduct.pending, (state, action) => {
			state.status = "pending";
			state.loading = true;
		});
		builder.addCase(fetchProduct.rejected, (state, action) => {
			state.loading = true;
			state.status = "failed";
			state.error = action.error?.message || "Error From Server";
		});
		builder.addCase(fetchProduct.fulfilled, (state, action) => {
			state.product = action.payload;
			state.status = "succeeded";
			state.loading = false;
		});
	},
});

export const {
	increment,
	filterProduct,
	clearFilter,
	addOneCart,
	deleteCart,
	filterProductQuery,
} = productSlice.actions;
export default productSlice.reducer;
