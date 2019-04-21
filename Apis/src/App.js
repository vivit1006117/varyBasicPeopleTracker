"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var mongoose_1 = require("mongoose");
var logger = require("morgan");
var passport = require("passport");
var FeatureRoleMapRoutes_1 = require("./routes/FeatureRoleMapRoutes");
var FeatureRoutes_1 = require("./routes/FeatureRoutes");
var RoleRoutes_1 = require("./routes/RoleRoutes");
var UserRoutes_1 = require("./routes/UserRoutes");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        mongoose_1.connect("mongodb://mongo/remassis");
    }
    App.prototype.middleware = function () {
        this.express.use(passport.initialize());
        this.express.use(passport.session());
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        var router = express.Router();
        router.get("/", function (req, res, next) {
            res.json({
                message: "Hello World!",
            });
        });
        this.express.use("/", router);
        this.express.use("/api/v1/users", UserRoutes_1.default);
        this.express.use("/api/v1/role", RoleRoutes_1.default);
        this.express.use("/api/v1/features", FeatureRoutes_1.default);
        this.express.use("/api/v1/featureMap", FeatureRoleMapRoutes_1.default);
    };
    return App;
}());
exports.default = new App().express;
