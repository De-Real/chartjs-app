import React from "react";

const Radio = () => {
	return (
		<div>
			<div>
				<input type="radio" id="bar" name="chart-type" value="bar" checked />
				<label htmlFor="bar">Bar</label>
			</div>
			<div>
				<input type="radio" id="line" name="chart-type" value="line" />
				<label htmlFor="line">Line</label>
			</div>
		</div>
	);
};

export default Radio;
