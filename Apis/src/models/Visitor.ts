import moment = require("moment");
import {model, Schema} from "mongoose";

const visitorSchema = new Schema({
	type: {
		index: true,
		required: true,
		type: String,
	},
	minAge: {
		index: true,
		required: true,
		type: Number,
	},
	maxAge: {
		index: true,
		required: true,
		type: Number,
	},
	totalVisited: {
		required: false,
		type: String,
	},
	visitDate: {
		required: false,
		type: Date,
	},
});

const Visitor = model("Visitor", visitorSchema);

export default Visitor;

const visitDate = moment().format("MM-DD-YYYY");

export const createVisitor = (type, minAge, maxAge, callback) => {
	const visitor = new Visitor({type, minAge, maxAge, totalVisited: 1, visitDate});
	return visitor.save(callback);
};

export const updateVisitor = (visitor, callback) => {
	return visitor.save(callback);
};

export const getVisitorByTypeAndAge = (type, minAge, maxAge, callback) => {
	const param = {$and: [{type}, {minAge}, {maxAge}, {visitDate}]};
	return Visitor.findOne(param, callback);
};

export const getVisitorsByType = (type, callback) => {
	const param = {type};
	return Visitor.find(param, callback);
};

export const getVisitorsToday = (callback) => {
	const param = {visitDate};
	return Visitor.find(param, callback);
};
