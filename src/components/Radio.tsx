import MuiRadio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useContext, useState } from "react";
import { ControlContext } from "../context";

const Radio = () => {
	const [value, setValue] = useState<"bar" | "line">("bar");

	const { changeChartType } = useContext(ControlContext);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const radioValue = (event.target as HTMLInputElement).value;

		if (radioValue !== "bar" && radioValue !== "line") return;

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
			</RadioGroup>
		</FormControl>
	);
};

export default Radio;
