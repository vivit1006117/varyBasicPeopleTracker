import * as bodyParser from "body-parser";
import * as express from "express";
import { connect } from "mongoose";
import * as logger from "morgan";
import VisitorRoutes from "./routes/VisitorRoutes";

class App {

	public express: express.Application;

	constructor() {
		this.express = express();
		this.middleware();
		this.routes();
		connect("mongodb://mongo/remassis");
	}

	private middleware(): void {
		this.express.use(logger("dev"));
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({ extended: false }));
	}

	private routes(): void {
		const router = express.Router();
		router.get("/", (req, res, next) => {
			res.json({
				message: "Hello World!",
			});
		});
		this.express.use("/", router);
		this.express.use("/api/v1/visitor", VisitorRoutes);
	}
}

export default new App().express;
