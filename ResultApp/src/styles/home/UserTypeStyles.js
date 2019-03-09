import {StyleSheet} from "react-native";

const UserTypeStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		flexDirection: "row",
		width: '100%',
	},
	header: {
		flex: 1,
		backgroundColor: '#30DB47'
	},
	title: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: '#30DB47'
	},
	value: {
		flex: 1,
		justifyContent: 'flex-end',
	}
});

export default UserTypeStyles;