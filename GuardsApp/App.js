import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from "./src/components/home/Home";
import AppStyles from "./src/styles/AppStyle";

export default class App extends Component<> {
	render() {
		return (
			<View style={AppStyles.container}>
				<Home/>
			</View>
		);
	}
}
