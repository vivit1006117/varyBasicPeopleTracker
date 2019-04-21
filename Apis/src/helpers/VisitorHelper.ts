import {Request, Response} from "express";
import {badRequest} from "../actions/GenericActions";
import {getAllVisitor, getAllVisitorForToday, updateVisitorDetails} from "../actions/VisitorActions";

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
	getAllVisitor(type, res);
}

export function getVisitorForTodayActionGenerator(res: Response) {
	getAllVisitorForToday(res);
}
