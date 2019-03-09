import React, {Component} from "react";
import {Text, View} from "react-native";
import HomeStyles from "../../styles/HomeStyle";
import {MainContainer} from "../common/MainContainer";
import {ContainerSection} from "../common/ContainerSection";
import UserType from "./UserType";
import GroupHeader from "./GroupHeader";

class Home extends Component {
	render() {
		return (
			<View>
				<MainContainer style={HomeStyles.container}>
					<ContainerSection>
						<MainContainer>
							<GroupHeader groupTitle={"MALE AGE RANGE"}/>
							<UserType ageRange={"16-25"}/>
							<UserType ageRange={"26-35"}/>
							<UserType ageRange={"36-45"}/>
							<UserType ageRange={"46-60"}/>
						</MainContainer>
					</ContainerSection>
					<ContainerSection>
						<MainContainer>
							<GroupHeader groupTitle={"FEMALE AGE RANGE"}/>
							<UserType ageRange={"16-25"}/>
							<UserType ageRange={"26-35"}/>
							<UserType ageRange={"36-45"}/>
							<UserType ageRange={"46-60"}/>
						</MainContainer>
					</ContainerSection>
					<ContainerSection>
						<MainContainer>
							<GroupHeader groupTitle={"KID AGE RANGE"}/>
							<UserType ageRange={"0-10"}/>
							<UserType ageRange={"10-16"}/>
						</MainContainer>
					</ContainerSection>
				</MainContainer>
			</View>
		)
	}
}

export default Home;
