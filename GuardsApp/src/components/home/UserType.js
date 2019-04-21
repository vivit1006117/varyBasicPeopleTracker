import React, {Component} from "react";
import {ContainerSection} from "../common/ContainerSection";
import {MainContainer} from "../common/MainContainer";
import {Button} from "../common/Button";
import axios from "axios";
import {Toast} from "native-base";

class UserType extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(type, minAge, maxAge) {
		console.log(type);
		if (type)
			axios({
				method: "post",
				headers: {"Content-Type": "application/json;charset=utf-8"},
				url: "http://localhost:3000/api/v1/visitor/addVisitor",
				data: {
					type: type, minAge: minAge, maxAge: maxAge
				}
			})
				.then((res) => {
					if (res.data.statusid === 200)
						return Toast.show({
							text: "updated",
							buttonText: "Okay",
							duration: 3000,
							type: "success",
							position: "top"
						});
					return Toast.show({
						text: " Failed",
						buttonText: "Okay",
						duration: 3000,
						type: "danger",
						position: "top"
					});
				})
				.catch(() => {
					return Toast.show({
						text: " Failed",
						buttonText: "Okay",
						duration: 3000,
						type: "danger",
						position: "top"
					});
				});
	};

	render() {
		const {ageRange, type, minAge, maxAge} = this.props;
		return (
			<MainContainer>
				<ContainerSection>
					<Button label={ageRange} onPress={this.onButtonPress.bind(this, type, minAge, maxAge)}/>
				</ContainerSection>
			</MainContainer>
		)
	}
}

export default UserType;
