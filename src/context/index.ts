import { chartType } from "./../types/chart-types";
import { createContext } from "react";

interface ContextType {
	axis: { x: string[]; y: string[] };
	chartType: chartType;
	changeXValue: (value: string) => void;
	changeYValue: (value: string) => void;
	changeChartType: (value: chartType) => void;
}

export const ControlContext = createContext<ContextType>({} as ContextType);
