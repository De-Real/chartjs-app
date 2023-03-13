import React, { useContext, useState } from "react";
import { ControlContext } from "../context";
import { InputDiv } from "./styles/Input.styled";

type InputProps = { label: string; dir: "x" | "y" };

const Input = ({ label, dir }: InputProps) => {
	const [inputValue, setInputValue] = useState("");

	const { changeXValue, changeYValue } = useContext(ControlContext);

	const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const axisValue = (event.target as HTMLInputElement).value;

		setInputValue(axisValue);

		if (dir === "x") {
			changeXValue(axisValue);
		} else {
			changeYValue(axisValue);
		}
	};

	return (
		<InputDiv>
			<label>{label}</label>
			<input value={inputValue} onChange={valueChangeHandler} />
		</InputDiv>
	);
};

export default Input;
