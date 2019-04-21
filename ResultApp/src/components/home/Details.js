import React, {Component} from "react";
import {ActivityIndicator, Text, View, FlatList} from "react-native";
import {MainContainer} from "../common/MainContainer";
import {ContainerSection} from "../common/ContainerSection";
import UserTypeStyles from "../../styles/home/UserTypeStyles";
import {Icon} from "native-base";
import DetailsStyles from "../../styles/home/DetailsStyle";
import {GroupHeaderStyles} from "../../styles/GroupHeaderStyles";
import axios from "axios";


class Details extends Component {
	constructor(props) {
		super(props);
		const {type, minAge, maxAge} = props.navigation.state.params;
		this.state = {
			isLoading: true,
			type: type,
			minAge: minAge,
			maxAge: maxAge,
			details: []
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
				url: "http://localhost:3000/api/v1/visitor/getAllFor",
				params: {
					type: this.state.type, minAge: this.state.minAge, maxAge: this.state.maxAge
				}
			})
				.then((res) => {
					this.setState({
						isLoading: false,
						details: res.data
					});
				})
				.catch(() => {
					console.log("Error");
				});
	};

	shouldRender() {
		if (this.state.isLoading) {
			return (<View style={UserTypeStyles.container}>
				<ActivityIndicator size="large" color="#c8d604"/>
			</View>)
		} else {
			return <FlatList
				data={this.state.details}
				renderItem={({item}) => Details.renderItems(item)}
				keyExtractor={item => item.date.toString()}/>;
		}
	}

	render() {
		const {type, minAge, maxAge} = this.props.navigation.state.params;
		return (
			<MainContainer>
				<ContainerSection style={DetailsStyles.container}>
					<MainContainer style={DetailsStyles.mainContainer}>
						<ContainerSection customStyle={GroupHeaderStyles.containerStyle}>
							<Icon style={DetailsStyles.header} name='arrow-back' onPress={() => {
								this.props.navigation.goBack()
							}}/>
							<Text style={DetailsStyles.header}>{type}</Text>
							<Text style={DetailsStyles.title}>{minAge}-{maxAge}</Text>
							<Icon style={UserTypeStyles.icon} name='refresh'
							      onPress={this.fetchVisitorDetails.bind(this)}/>
						</ContainerSection>
					</MainContainer>
				</ContainerSection>
				<ContainerSection>
					<View style={UserTypeStyles.container}>
						<Text style={DetailsStyles.title}>DATE</Text>
						<Text style={DetailsStyles.title}>COUNT</Text>
					</View>
				</ContainerSection>
				<ContainerSection>
					<View style={UserTypeStyles.container}>
						{this.shouldRender()}
					</View>
				</ContainerSection>
			</MainContainer>
		)
	}

	static renderItems(item) {
		return (<View style={UserTypeStyles.container}>
			<Text style={DetailsStyles.title}>{item.date}</Text>
			<Text style={DetailsStyles.title}>{item.count}</Text>
		</View>);
	}
}

export default Details;
