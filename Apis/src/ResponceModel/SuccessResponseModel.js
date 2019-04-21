"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SuccessResponse = /** @class */ (function () {
    function SuccessResponse(message, type, typeId) {
        this.statusid = 200;
        this.status = "Success";
        this.message = message;
        this.type = type;
        this.typeId = typeId;
    }
    return SuccessResponse;
}());
exports.default = SuccessResponse;
