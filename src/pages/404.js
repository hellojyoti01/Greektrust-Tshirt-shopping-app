import React from "react";
import s from "../styles/_Error.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function Error() {
	const [errorRoute, setErrorRoute] = useState("");

	//useRouter use To receive param
	const { asPath: _error } = useRouter();

	function errorRout() {
		if (_error) return setErrorRoute(_error);
	}
	useEffect(() => {
		//mounting phase
		errorRout();

		//unmounting phase return useEffect reduce memory leak
		return () => {
			setErrorRoute("");
		};
	}, []);
	return (
		<div>
			<div className={s.error_container}>
				<h1 className={s.error_heading}>ERROR</h1>
				<h5 className={s.error_sub_heading}>
					Can not Find The Route{" "}
					<span>{errorRoute ? errorRoute.toString().substring(0, 6) : ""}...</span>
				</h5>
				<div className={s.error_back_btn}>Back To Previous Page </div>
			</div>
		</div>
	);
}

export default Error;
