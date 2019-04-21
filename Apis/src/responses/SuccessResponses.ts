import SuccessResponse from "../ResponceModel/SuccessResponseModel";
import * as MESSAGES from "./SuccessMessages";
import * as TYPE from "./SuccessTypes";

export function VISITOR_ADDED() {
	return new SuccessResponse(MESSAGES.USER_ADDED, TYPE.USER, null);
}

export function USER_ACTIVATION_SUCCESS(username: string) {
	return new SuccessResponse(MESSAGES.USER_ACTIVATION_SUCCESS, TYPE.USER, username);
}

export function ROLE_ADDED_TO_USER(username: string) {
	return new SuccessResponse(MESSAGES.ROLE_ADDED_TO_USER, TYPE.USER, username);
}

export function ROLE_ADDED(rolename: string) {
	return new SuccessResponse(MESSAGES.ROLE_ADDED, TYPE.ROLE, rolename);
}

export function FEATURE_ADDED_TO_ROLE(rolename: string) {
	return new SuccessResponse(MESSAGES.FEATURE_ADDED_TO_ROLE, TYPE.FEATURE_ROLE_MAP, rolename);
}
