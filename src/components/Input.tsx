import React, { memo, useContext, useState } from "react";
import { ControlContext } from "../context";
import { InputDiv } from "./styles/Input.styled";

type InputProps = { label: string; dir: "x" | "y"; initialValue: string };

const Input = ({ label, dir, initialValue }: InputProps) => {
	const [inputValue, setInputValue] = useState(initialValue);

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
			<label>{label + " (you can change this value)"}</label>
			<input value={inputValue} onChange={valueChangeHandler} />
		</InputDiv>
	);
};

export default memo(Input);
