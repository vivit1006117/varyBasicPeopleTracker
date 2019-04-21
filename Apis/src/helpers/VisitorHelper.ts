import {Request, Response} from "express";
import {badRequest} from "../actions/GenericActions";
import {getAllTheVisitor, getAllVisitor, getAllVisitorForToday, updateVisitorDetails} from "../actions/VisitorActions";

export function addVisitorActionGenerator(req: Request, res: Response) {
	const {type, minAge, maxAge} = req.body;
	const allRequiredParameterPresent = !!type || !!minAge || !!maxAge;
	if (allRequiredParameterPresent) {
		updateVisitorDetails(type, minAge, maxAge, res);
	} else {
		badRequest(res);
	}
}

export function getAllVisitorAction(type, res: Response) {
    if (type) {
        getAllVisitor(type, res);
    } else {
        badRequest(res);
    }
}

export function getAllTestVisitorAction(res: Response) {
        getAllTheVisitor(res);
}

export function getVisitorForTodayActionGenerator(res: Response) {
	getAllVisitorForToday(res);
}
