import {Response} from "express";
import {
    createVisitor, getAllVisitors,
    getVisitorByTypeAndAge, getVisitorByTypeAndAgeForToday,
    getVisitorsByType,
    getVisitorsToday,
    updateVisitor,
} from "../models/Visitor";
import Visitor from "../models/Visitor";
import VisitorResponse from "../ResponceModel/VisitorResponceModel";
import * as SUCCESS from "../responses/SuccessResponses";
import {internalServerErrorHandler} from "./GenericActions";

function saveVisitorDetails(existingVisitor, type, minAge, maxAge, res: Response) {
    if (existingVisitor) {
        console.log(existingVisitor);
        existingVisitor.totalVisited = parseInt(existingVisitor.totalVisited, 10) + 1;
        updateVisitor(existingVisitor, (err, visitor) => {
            internalServerErrorHandler(err, res, res.send(SUCCESS.VISITOR_ADDED()));
        });
    } else {
        createVisitor(type, minAge, maxAge, (err, visitor) => {
            internalServerErrorHandler(err, res, res.send(SUCCESS.VISITOR_ADDED()));
        });
    }
}

export function updateVisitorDetails(type, minAge, maxAge, res: Response) {
    getVisitorByTypeAndAgeForToday(type, minAge, maxAge, (err, visitor) => {
        internalServerErrorHandler(err, res, saveVisitorDetails(visitor, type, minAge, maxAge, res));
    });
}

export function getAllVisitor(type, res: Response) {
    getVisitorsByType(type, (err, visitors) => {
        internalServerErrorHandler(err, res, res.send(createResponseModel(visitors)));
    });
}

export function getAllVisitorFor(type, minAge, maxAge, res: Response) {
    getVisitorByTypeAndAge(type, minAge, maxAge, (err, visitors) => {
        internalServerErrorHandler(err, res, res.send(createResponseModelDummy(visitors, type, minAge, maxAge)));
    });
}

export function getVisitorForToday(type, minAge, maxAge, res: Response) {
    getVisitorByTypeAndAgeForToday(type, minAge, maxAge, (err, visitor) => {
        internalServerErrorHandler(err, res, res.send(checkIfVisitorPresentResponseModel(visitor, type, minAge, maxAge)));
    });
}

function createResponseModelDummy(visitors, type, minAge, maxAge) {
    if (visitors) {
        return createResponseModel(visitors);
    }
    const dummyVisitor = new Visitor({type, minAge, maxAge, totalVisited: 0});
    return new VisitorResponse(dummyVisitor);
}

function checkIfVisitorPresentResponseModel(visitor, type, minAge, maxAge) {
    if (visitor) {
        return new VisitorResponse(visitor);
    }
    const dummyVisitor = new Visitor({type, minAge, maxAge, totalVisited: 0});
    return new VisitorResponse(dummyVisitor);
}

function createResponseModel(visitors) {
    if (visitors) {
        return visitors.map((visitor) => new VisitorResponse(visitor));
    }
    return null;
}

export function getAllTheVisitor(res: Response) {
    getAllVisitors((err, visitors) => {
        internalServerErrorHandler(err, res, res.send(createResponseModel(visitors)));
    });
}

export function getAllVisitorForToday(res: Response) {
    getVisitorsToday((err, visitors) => {
        internalServerErrorHandler(err, res, res.send(visitors));
    });
}
