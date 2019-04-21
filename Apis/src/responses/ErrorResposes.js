"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorResponseModel_1 = require("../ResponceModel/ErrorResponseModel");
// Generic Failures
exports.INTERNAL_SERVER_ERROR = new ErrorResponseModel_1.default("INTERNAL_SERVER_ERROR");
exports.REQUEST_PARAMETER_NOT_PROPER = new ErrorResponseModel_1.default("REQUEST_PARAMETER_NOT_PROPER");
// User Failures
exports.DUPLICATE_USER = new ErrorResponseModel_1.default("DUPLICATE_USER");
exports.USER_NOT_FOUND = new ErrorResponseModel_1.default("USER_NOT_FOUND");
exports.USER_HAS_BEEN_DEACTIVATED = new ErrorResponseModel_1.default("USER_HAS_BEEN_DEACTIVATED");
// Failures because of ROLE
exports.ROLE_NOT_ASSIGNED = new ErrorResponseModel_1.default("ROLE_NOT_ASSIGNED");
exports.ROLE_NOT_FOUND = new ErrorResponseModel_1.default("ROLE_NOT_FOUND");
exports.DUPLICATE_ROLE = new ErrorResponseModel_1.default("DUPLICATE_ROLE");
// Failures because of Feature
exports.FEATURE_NOT_ASSIGNED = new ErrorResponseModel_1.default("FEATURE_NOT_ASSIGNED");
