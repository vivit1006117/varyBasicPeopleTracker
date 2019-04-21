import ErrorResponse from "../ResponceModel/ErrorResponseModel";

// Generic Failures
export const INTERNAL_SERVER_ERROR = new ErrorResponse("INTERNAL_SERVER_ERROR");
export const REQUEST_PARAMETER_NOT_PROPER = new ErrorResponse("REQUEST_PARAMETER_NOT_PROPER");

// User Failures
export const DUPLICATE_USER = new ErrorResponse("DUPLICATE_USER");
export const USER_NOT_FOUND = new ErrorResponse("USER_NOT_FOUND");
export const USER_HAS_BEEN_DEACTIVATED = new ErrorResponse("USER_HAS_BEEN_DEACTIVATED");

// Failures because of ROLE
export const ROLE_NOT_ASSIGNED = new ErrorResponse("ROLE_NOT_ASSIGNED");
export const ROLE_NOT_FOUND = new ErrorResponse("ROLE_NOT_FOUND");
export const DUPLICATE_ROLE = new ErrorResponse("DUPLICATE_ROLE");

// Failures because of Feature
export const FEATURE_NOT_ASSIGNED = new ErrorResponse("FEATURE_NOT_ASSIGNED");
