import React, {Component} from "react";
import {Text, View} from "react-native";
import {ContainerSection} from "../common/ContainerSection";
import {MainContainer} from "../common/MainContainer";
import UserTypeStyles from "../../styles/home/UserTypeStyles";
import axios from "axios";
// import {Icon} from "native-base";

class UserType extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
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
						count: res.data.count
					});
				})
				.catch(() => {
					console.log("Error");
				});
	};

	render() {
		const {ageRange, type, minAge, maxAge} = this.props;
		return (
			<MainContainer>
				<ContainerSection>
					<View style={UserTypeStyles.container}>
						<Text style={UserTypeStyles.header}>{ageRange}</Text>
						<Text style={UserTypeStyles.title}>Total:</Text>
						<Text style={UserTypeStyles.value}>{this.state.count}</Text>
						{/*<Icon name='add' onPress={this.fetchVisitorDetails.bind(this)}/>*/}
					</View>
				</ContainerSection>
			</MainContainer>
		)
	}
}

export default UserType;
