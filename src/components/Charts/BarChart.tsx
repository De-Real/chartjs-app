import { Bar } from "react-chartjs-2";
import { IChartData } from "../../types/chart-data";

export const BarChart = ({ chartData }: { chartData: IChartData }) => {
	return (
		<div>
			<Bar
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
};
