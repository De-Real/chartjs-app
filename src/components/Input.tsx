import React, { memo, useContext, useState, useRef } from "react";
import { ControlContext } from "../context";
import { InputForm } from "./styles/Input.styled";

type InputProps = { label: string; dir: "x" | "y"; initialValue: string };

const Input = ({ label, dir, initialValue }: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const { changeXValue, changeYValue } = useContext(ControlContext);

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();

		const inputValue = inputRef.current?.value;

		if (!inputValue) return;

		if (dir === "x") {
			changeXValue(inputValue);
		} else {
			changeYValue(inputValue);
		}
	};

	return (
		<InputForm onSubmit={submitHandler} onBlur={submitHandler}>
			<label>{label + " (you can change this value)"}</label>
			<input ref={inputRef} defaultValue={initialValue} />
		</InputForm>
	);
};

export default memo(Input);
