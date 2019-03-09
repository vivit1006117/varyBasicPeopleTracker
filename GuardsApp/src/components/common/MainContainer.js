import React from "react";
import { View } from "react-native";
import {MainContainerStyles} from "../../styles/MainContainerStyles";

const MainContainer = (props) => {

	return (
		<View style={MainContainerStyles.containerStyle}>
			{props.children}
		</View>
	);
};

export { MainContainer };
