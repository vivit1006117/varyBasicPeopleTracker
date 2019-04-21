"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages = require("../responses/ErrorMessages");
var status = require("../responses/ErrorStatus");
var statusIds = require("../responses/ErrorStatusId");
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse(errorType) {
        this.statusId = statusIds[errorType];
        this.message = messages[errorType];
        this.status = status[errorType];
    }
    return ErrorResponse;
}());
exports.default = ErrorResponse;
