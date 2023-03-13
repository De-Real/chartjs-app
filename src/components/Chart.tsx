import { BarChart } from "./Charts/BarChart";
import Chartjs from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./Charts/LineChart";
import { memo, useMemo } from "react";
import { chartType } from "../types/chart-types";
import { PieChart } from "./Charts/PieChart";

Chartjs.register(CategoryScale);

type ChartProps = {
	chartType: chartType;
	axis: { x: string[]; y: string[] };
};

const Chart = ({ chartType, axis }: ChartProps) => {
	const chartData = useMemo(() => {
		return {
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
	}, [axis]);

	let chart = <BarChart chartData={chartData} />;

	if (chartType === "line") {
		chart = <LineChart chartData={chartData} />;
	}

	if (chartType === "pie") {
		chart = <PieChart chartData={chartData} />;
	}

	return <div>{chart}</div>;
};

export default memo(Chart);
