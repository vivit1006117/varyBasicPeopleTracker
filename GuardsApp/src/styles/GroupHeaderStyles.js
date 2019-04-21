import { StyleSheet } from "react-native";

const GroupHeaderStyles = StyleSheet.create({
	containerStyle: {
		borderBottomWidth: 1,
		padding: 8,
		backgroundColor: "#fff",
		justifyContent: "flex-start",
		flexDirection: "row",
		borderColor: "#ddd",
		position: "relative"
	},
	containerWithOutBorderStyle: {
		padding: 5,
		backgroundColor: "#fff",
		justifyContent: "flex-start",
		flexDirection: "row",
		position: "relative"
	},
	containerColumnStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: "#fff",
		justifyContent: "flex-start",
		flexDirection: "column",
		borderColor: "#ddd",
		position: "relative"
	},
});

export {GroupHeaderStyles};
