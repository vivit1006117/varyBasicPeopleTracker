import React, {Component} from "react";
import AppStyles from "../ResultApp/src/styles/AppStyle";
import Home from "../ResultApp/src/components/home/Home";
import {View} from "react-native";


export default class App extends Component<> {
	render() {
		return (
			<View style={AppStyles.container}>
				<Home/>
			</View>
		);
	}
}