"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SuccessResponseModel_1 = require("../ResponceModel/SuccessResponseModel");
var MESSAGES = require("./SuccessMessages");
var TYPE = require("./SuccessTypes");
function USER_ADDED(email) {
    return new SuccessResponseModel_1.default(MESSAGES.USER_ADDED, TYPE.USER, email);
}
exports.USER_ADDED = USER_ADDED;
function USER_ACTIVATION_SUCCESS(username) {
    return new SuccessResponseModel_1.default(MESSAGES.USER_ACTIVATION_SUCCESS, TYPE.USER, username);
}
exports.USER_ACTIVATION_SUCCESS = USER_ACTIVATION_SUCCESS;
function ROLE_ADDED_TO_USER(username) {
    return new SuccessResponseModel_1.default(MESSAGES.ROLE_ADDED_TO_USER, TYPE.USER, username);
}
exports.ROLE_ADDED_TO_USER = ROLE_ADDED_TO_USER;
function ROLE_ADDED(rolename) {
    return new SuccessResponseModel_1.default(MESSAGES.ROLE_ADDED, TYPE.ROLE, rolename);
}
exports.ROLE_ADDED = ROLE_ADDED;
function FEATURE_ADDED_TO_ROLE(rolename) {
    return new SuccessResponseModel_1.default(MESSAGES.FEATURE_ADDED_TO_ROLE, TYPE.FEATURE_ROLE_MAP, rolename);
}
exports.FEATURE_ADDED_TO_ROLE = FEATURE_ADDED_TO_ROLE;
