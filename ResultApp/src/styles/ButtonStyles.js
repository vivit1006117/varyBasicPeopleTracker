import { StyleSheet } from "react-native";

const ButtonStyles = StyleSheet.create({
	textStyle: {
		alignSelf: "center",
		color: "#ffffff",
		fontSize: 16,
		fontWeight: "600",
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: "stretch",
		backgroundColor: "#3630DB",
		borderRadius: 5,
		borderBottomWidth: 3,
		borderColor: "#a05a03",
		marginLeft: 5,
		marginRight: 5
	},
	disableButtonStyle: {
		flex: 1,
		alignSelf: "stretch",
		backgroundColor: "#8481ED",
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5
	}
});

export {ButtonStyles};
