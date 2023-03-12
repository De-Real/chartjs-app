import React from "react";
import Input from "./Input";
import Radio from "./Radio";

const Chart = () => {
	return (
		<div>
			<Input label="X axis label" />
			<Input label="Y axis label" />
			<div> Chart diagram</div>
			<Radio />
		</div>
	);
};

export default Chart;
