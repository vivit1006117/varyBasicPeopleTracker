import {Response} from "express";
import {
    createVisitor,
    getVisitorByTypeAndAge,
    getVisitorsByType,
    getVisitorsToday,
    updateVisitor,
} from "../models/Visitor";
import {internalServerErrorHandler} from "./GenericActions";

function saveVisitorDetails(existingVisitor, type, minAge, maxAge, res: Response) {
    if (existingVisitor) {
        existingVisitor.totalVisited = parseInt(existingVisitor.totalVisited, 10) + 1;
        updateVisitor(existingVisitor, (err, visitor) => {
            internalServerErrorHandler(err, res, res.send(visitor));
        });
    } else {
        createVisitor(type, minAge, maxAge, (err, visitor) => {
            internalServerErrorHandler(err, res, res.send(visitor));
        });
    }
}

export function updateVisitorDetails(type, minAge, maxAge, res: Response) {
    getVisitorByTypeAndAge(type, minAge, maxAge, (err, visitor) => {
        internalServerErrorHandler(err, res, saveVisitorDetails(visitor, type, minAge, maxAge, res));
    });
}

export function getAllVisitor(type, res: Response) {
    getVisitorsByType(type, (err, visitors) => {
        internalServerErrorHandler(err, res, res.send(visitors));
    });
}

export function getAllVisitorForToday(res: Response) {
    getVisitorsToday((err, visitors) => {
        internalServerErrorHandler(err, res, res.send(visitors));
    });
}
