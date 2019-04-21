import React, {Component} from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {ContainerSection} from "../common/ContainerSection";
import {MainContainer} from "../common/MainContainer";
import UserTypeStyles from "../../styles/home/UserTypeStyles";
import axios from "axios";
import {Icon} from "native-base";

class UserType extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			isLoading: true,
			type: props.type,
			minAge: props.minAge,
			maxAge: props.maxAge
		};
	}

	componentDidMount() {
		this.fetchVisitorDetails();
	}

	fetchVisitorDetails() {
		console.log(this.state.type);
		if (this.state.type)
			axios({
				method: "get",
				headers: {"Content-Type": "application/json;charset=utf-8"},
				url: "http://localhost:3000/api/v1/visitor/getForTodayBy",
				params: {
					type: this.state.type, minAge: this.state.minAge, maxAge: this.state.maxAge
				}
			})
				.then((res) => {
					this.setState({
						count: res.data.count,
						isLoading: false
					});
				})
				.catch(() => {
					console.log("Error");
				});
	};

	navigate() {
		this.props.navigation.navigate("Details", {type: this.state.type, minAge: this.state.minAge, maxAge: this.state.maxAge});
	}

	shouldRender(ageRange) {
		if (this.state.isLoading) {
			return (<View style={UserTypeStyles.container}>
				<ActivityIndicator size="large" color="#c8d604"/>
			</View>)
		} else {
			return (<View style={UserTypeStyles.container}>
				<Text style={UserTypeStyles.header}>{ageRange}</Text>
				<Text style={UserTypeStyles.title}>Total:</Text>
				<Text style={UserTypeStyles.value}>{this.state.count}</Text>
				<Icon style={UserTypeStyles.icon} name='refresh' onPress={this.fetchVisitorDetails.bind(this)}/>
				<Icon style={UserTypeStyles.icon} name='arrow-forward' onPress={this.navigate.bind(this)}/>
			</View>);
		}
	}

	render() {
		const {ageRange} = this.props;
		return (
			<MainContainer>
				<ContainerSection>
					{this.shouldRender(ageRange)}
				</ContainerSection>
			</MainContainer>
		)
	}
}

export default UserType;
