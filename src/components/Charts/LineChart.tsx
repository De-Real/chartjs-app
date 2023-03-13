import React from "react";
import { Line } from "react-chartjs-2";
import { IChartData } from "../../types/chart-data";

function LineChart({ chartData }: { chartData: IChartData }) {
	return (
		<div>
			<Line
				data={chartData}
				options={{
					plugins: {
						legend: {
							display: false,
						},
					},
				}}
			/>
		</div>
	);
}
export default LineChart;
