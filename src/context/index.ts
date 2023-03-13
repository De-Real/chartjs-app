import { createContext } from "react";

interface ContextType {
	axis: { x: string[]; y: string[] };
	chartType: "bar" | "line";
	changeXValue: (value: string) => void;
	changeYValue: (value: string) => void;
	changeChartType: (value: "bar" | "line") => void;
}

export const ControlContext = createContext<ContextType>({} as ContextType);
