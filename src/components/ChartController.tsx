import React, { useContext } from "react";
import { ControlContext } from "../context";
import Chart from "./Chart";
import Input from "./Control/Input";
import Radio from "./Control/Radio";
import { StyledChartController } from "./styles/ChartController.styled";

const ChartController = () => {
	const { chartType, axis } = useContext(ControlContext);

	return (
		<StyledChartController>
			<Input label="X axis label" dir="x" initialValue="Feb, Mar, Apr, May" />
			<Input label="Y axis label" dir="y" initialValue="19, 30, 10, 13" />
			<Chart chartType={chartType} axis={axis} />
			<Radio />
		</StyledChartController>
	);
};

export default ChartController;
