import React from "react";
import { View } from "react-native";
import {ContainerSectionStyles} from "../../styles/ContainerSectionStyles";

const ContainerSection = (props) => {
	const style = props.customStyle ? props.customStyle : ContainerSectionStyles.containerStyle;

	return (
		<View style={style}>
			{props.children}
		</View>
	);
};

export { ContainerSection };
