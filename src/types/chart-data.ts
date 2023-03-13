export interface IChartData {
	labels: string[];
	datasets: {
		label: string;
		data: string[];
		backgroundColor: string[];
		borderColor: string;
		borderWidth: number;
	}[];
}
