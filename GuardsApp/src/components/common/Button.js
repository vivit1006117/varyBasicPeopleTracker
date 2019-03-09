import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {ButtonStyles} from "../../styles/ButtonStyles";

const Button = ({label, onPress, buttonStyle, textStyle}) => {
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle || ButtonStyles.buttonStyle}>
			<Text style={textStyle || ButtonStyles.textStyle}>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

export { Button };
