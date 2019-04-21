import React, {Component} from "react";
import {ActivityIndicator, View} from "react-native";
import HomeStyles from "../../styles/home/HomeStyle";
import {MainContainer} from "../common/MainContainer";
import {ContainerSection} from "../common/ContainerSection";
import UserType from "./UserType";
import GroupHeader from "./GroupHeader";
import moment from "moment";
import {Icon} from "native-base";

class Home extends Component {
	constructor(props){
		super();
		this.state = {
			isLoading: false
		}
	}

	refresh(){
		this.setState({
			isLoading: !this.state.isLoading
		});
	}

	renderComponents(navigation) {
		if(this.state.isLoading){
			return <ActivityIndicator size="large" color="#4440BA"/>;
		}
		return (<View>
			<ContainerSection>
				<MainContainer>
					<GroupHeader groupTitle={"MALE AGE RANGE"}/>
					<UserType ageRange={"16-25"} type={"MALE"} minAge={16} maxAge={25}
					          navigation={navigation}/>
					<UserType ageRange={"26-45"} type={"MALE"} minAge={26} maxAge={45}
					          navigation={navigation}/>
					<UserType ageRange={"46-60"} type={"MALE"} minAge={46} maxAge={60}
					          navigation={navigation}/>
					<UserType ageRange={"60-99"} type={"MALE"} minAge={61} maxAge={99}
					          navigation={navigation}/>
				</MainContainer>
			</ContainerSection>
			<ContainerSection>
				<MainContainer>
					<GroupHeader groupTitle={"FEMALE AGE RANGE"}/>
					<UserType ageRange={"16-25"} type={"FEMALE"} minAge={16} maxAge={25}
					          navigation={navigation}/>
					<UserType ageRange={"26-45"} type={"FEMALE"} minAge={26} maxAge={45}
					          navigation={navigation}/>
					<UserType ageRange={"46-60"} type={"FEMALE"} minAge={46} maxAge={60}
					          navigation={navigation}/>
					<UserType ageRange={"60-99"} type={"FEMALE"} minAge={60} maxAge={99}
					          navigation={navigation}/>
				</MainContainer>
			</ContainerSection>
			<ContainerSection>
				<MainContainer>
					<GroupHeader groupTitle={"KID AGE RANGE"}/>
					<UserType ageRange={"0-10"} type={"KID"} minAge={0} maxAge={10}
					          navigation={navigation}/>
					<UserType ageRange={"10-16"} type={"KID"} minAge={10} maxAge={16}
					          navigation={navigation}/>
				</MainContainer>
			</ContainerSection>
		</View>)
	}

	render() {
		const navigation = this.props.navigation;
		return (
			<View>
				<MainContainer style={HomeStyles.container}>
					<ContainerSection>
						<MainContainer>
							<GroupHeader groupTitle={moment().format("MM-DD-YYYY")}/>
							<Icon style={HomeStyles.icon} name='refresh' onPress={this.refresh.bind(this)}/>
						</MainContainer>
					</ContainerSection>
					{this.renderComponents(navigation)}
				</MainContainer>
			</View>
		)
	}
}

export default Home;
