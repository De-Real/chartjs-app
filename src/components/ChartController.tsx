import React from "react";
import Input from "./Input";
import Radio from "./Radio";
import { StyledChartController } from "./styles/ChartController.styled";

type ChartControllerProps = {
	children: React.ReactNode;
};

const ChartController = ({ children }: ChartControllerProps) => {
	return (
		<StyledChartController>
			<Input label="X axis label" dir="x" />
			<Input label="Y axis label" dir="y" />
			{children}
			<Radio />
		</StyledChartController>
	);
};

export default ChartController;
