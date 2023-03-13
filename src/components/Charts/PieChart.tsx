import { Pie } from "react-chartjs-2";
import { IChartData } from "../../types/chart-data";

export const PieChart = ({ chartData }: { chartData: IChartData }) => {
	return (
		<Pie
			data={chartData}
			options={{
				plugins: {
					legend: {
						display: false,
					},
				},
			}}
		/>
	);
};
