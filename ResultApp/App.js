import React, {Component} from "react";
import AppStyles from "../ResultApp/src/styles/AppStyle";
import {View} from "react-native";
import Router from "./src/components/home/Router";


export default class App extends Component<> {
	render() {
		return (
			<View style={AppStyles.container}>
				<Router/>
			</View>
		);
	}
}