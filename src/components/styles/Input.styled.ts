import styled from "styled-components";

export const InputForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-bottom: 20px;

	& input {
		background-color: transparent;
		border: 1px solid black;
		border-radius: 2px;
		height: 28px;
		font-size: 20px;
		padding: 3px 5px;
		transition: all 0.2s ease 0s;
		&:hover,
		&:focus {
			color: #00008b;
			border: 1px solid #00008b;
		}
	}
`;
