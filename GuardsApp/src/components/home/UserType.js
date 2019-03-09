import React, {Component} from "react";
import {Text, View} from "react-native";
import {ContainerSection} from "../common/ContainerSection";
import {MainContainer} from "../common/MainContainer";
import {Button} from "../common/Button";

class UserType extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {ageRange} = this.props;
		return (
			<MainContainer>
				<ContainerSection>
					<Button label={ageRange}/>
				</ContainerSection>
			</MainContainer>
		)
	}
}

export default UserType;
