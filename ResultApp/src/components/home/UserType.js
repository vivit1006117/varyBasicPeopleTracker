import React, {Component} from "react";
import {Text, View} from "react-native";
import {ContainerSection} from "../common/ContainerSection";
import {MainContainer} from "../common/MainContainer";
import UserTypeStyles from "../../styles/home/UserTypeStyles";

class UserType extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {ageRange} = this.props;
		return (
			<MainContainer>
				<ContainerSection>
					<View style={UserTypeStyles.container}>
						<Text style={UserTypeStyles.header}>{ageRange}</Text>
						<Text style={UserTypeStyles.title}>Total:</Text>
						<Text style={UserTypeStyles.value}>50</Text>
					</View>
				</ContainerSection>
			</MainContainer>
		)
	}
}

export default UserType;
