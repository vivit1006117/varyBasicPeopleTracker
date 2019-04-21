import {Request, Response, Router} from "express";
import * as Helper from "../helpers/VisitorHelper";

class VisitorRoutes {

    public static getAll(req: Request, res: Response) {
        const {type} = req.query;
        Helper.getAllVisitorAction(type, res);
    }

    public static getAllFor(req: Request, res: Response) {
        const {type, minAge, maxAge} = req.query;
        Helper.getAllVisitorForAction(type, minAge, maxAge, res);
    }

    public static getForToday(req: Request, res: Response) {
        const {type, minAge, maxAge} = req.query;
        Helper.getVisitorForTodayAction(type, minAge, maxAge, res);
    }

    public static getAllTest(req: Request, res: Response) {
        Helper.getAllTestVisitorAction(res);
    }

    public static add(req: Request, res: Response) {
        Helper.addVisitorActionGenerator(req, res);
    }

    public static getAllVisitorsToday(req: Request, res: Response) {
        Helper.getVisitorForTodayActionGenerator(res);
    }

    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init() {
        this.router.get("/getAll", VisitorRoutes.getAll);
        this.router.get("/getAllFor", VisitorRoutes.getAllFor);
        this.router.get("/getForTodayBy", VisitorRoutes.getForToday);
        this.router.get("/getAllTest", VisitorRoutes.getAllTest);
        this.router.post("/addVisitor", VisitorRoutes.add);
        this.router.get("/getTodayVisitor", VisitorRoutes.getAllVisitorsToday);
    }
}

const visitorRoutes = new VisitorRoutes();
visitorRoutes.init();

export default visitorRoutes.router;
