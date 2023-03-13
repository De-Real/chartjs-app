import MuiRadio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { memo, useContext, useState } from "react";
import { ControlContext } from "../../context";
import { chartType } from "../../types/chart-types";

const Radio = () => {
	const [value, setValue] = useState<chartType>("bar");

	const { changeChartType } = useContext(ControlContext);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const radioValue = (event.target as HTMLInputElement).value;

		if (radioValue !== "bar" && radioValue !== "line" && radioValue !== "pie")
			return;

		setValue(radioValue);
		changeChartType(radioValue);
	};

	return (
		<FormControl>
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				name="controlled-radio-buttons-group"
				value={value}
				onChange={handleChange}
			>
				<FormControlLabel
					value="bar"
					control={<MuiRadio />}
					label="Bar chart"
				/>
				<FormControlLabel
					value="line"
					control={<MuiRadio />}
					label="Line chart"
				/>
				<FormControlLabel
					value="pie"
					control={<MuiRadio />}
					label="Pie chart"
				/>
				{/* If more charts types added, then radio for them can be easily added here */}
			</RadioGroup>
		</FormControl>
	);
};

export default memo(Radio);
