import React, {Component} from "react";
import {Text} from "react-native";
import {ContainerSection} from "../common/ContainerSection";
import {GroupHeaderStyles} from "../../styles/GroupHeaderStyles";
import {MainContainer} from "../common/MainContainer";

class GroupHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {groupTitle} = this.props;
		return (
				<ContainerSection customStyle={GroupHeaderStyles.containerStyle}>
					<Text>{groupTitle}</Text>
				</ContainerSection>
		)
	}
}

export default GroupHeader;