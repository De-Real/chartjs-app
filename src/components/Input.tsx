import React from "react";

const Input = ({ label }: { label: string }) => {
	return (
		<div>
			<label>{label}</label>
			<input />
		</div>
	);
};

export default Input;
