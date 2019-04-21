import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from "./src/components/home/Home";
import AppStyles from "./src/styles/AppStyle";
import {Root} from "native-base";

export default class App extends Component<> {
	render() {
		return (
			<Root>
				<View style={AppStyles.container}>
					<Home/>
				</View>
			</Root>
		);
	}
}
