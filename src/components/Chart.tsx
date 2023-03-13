import React, { useContext } from "react";
import { BarChart } from "./Charts/BarChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import ChartController from "./ChartController";
import LineChart from "./Charts/LineChart";
import { ControlContext } from "../context";

Chart.register(CategoryScale);

const ChartComponent = () => {
	const { chartType, axis } = useContext(ControlContext);

	const chartData = {
		labels: axis.x.map((data) => data),
		datasets: [
			{
				label: "Value ",
				data: axis.y.map((data) => data),
				backgroundColor: [
					"rgba(75,192,192,1)",
					"#ecf0f1",
					"#50AF95",
					"#f3ba2f",
					"#2a71d0",
				],
				borderColor: "black",
				borderWidth: 2,
			},
		],
	};

	return (
		<ChartController>
			{chartType === "bar" ? (
				<BarChart chartData={chartData} />
			) : (
				<LineChart chartData={chartData} />
			)}
		</ChartController>
	);
};

export default ChartComponent;
