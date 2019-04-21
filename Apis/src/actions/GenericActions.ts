import {Response} from "express";
import * as ERROR from "../responses/ErrorResposes";

export function badRequest(res: Response) {
	res.send(ERROR.REQUEST_PARAMETER_NOT_PROPER);
}

export function internalServerErrorHandler(error, res: Response, action: any) {
	if (error) { res.send(ERROR.INTERNAL_SERVER_ERROR); } else { return action; }
}
