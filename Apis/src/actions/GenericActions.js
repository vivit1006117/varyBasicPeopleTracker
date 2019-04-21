"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ERROR = require("../responses/ErrorResposes");
function badRequest(res) {
    res.send(ERROR.REQUEST_PARAMETER_NOT_PROPER);
}
exports.badRequest = badRequest;
function internalServerErrorHandler(error, res, action) {
    if (error) {
        res.send(ERROR.INTERNAL_SERVER_ERROR);
    }
    else {
        return action;
    }
}
exports.internalServerErrorHandler = internalServerErrorHandler;
