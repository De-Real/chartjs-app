import React, { useState } from "react";
import { ControlContext } from ".";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [xValue, setXValue] = useState("Feb, Mar, Apr, May");
	const [yValue, setYValue] = useState("19, 30, 10, 13");

	const [chartType, setChartType] = useState<"bar" | "line">("bar");

	const changeXValue = (value: string) => {
		setXValue(value);
	};

	const changeYValue = (value: string) => {
		setYValue(value);
	};

	const changeChartType = (value: "bar" | "line") => {
		setChartType(value);
	};

	const controlContextValue = {
		axis: { x: xValue.split(","), y: yValue.split(",") },
		chartType,
		changeXValue,
		changeYValue,
		changeChartType,
	};

	return (
		<ControlContext.Provider value={controlContextValue}>
			{children}
		</ControlContext.Provider>
	);
};

export default ContextProvider;
