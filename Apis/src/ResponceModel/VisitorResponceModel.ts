import moment = require("moment");

class VisitorResponse {
    public statusid = 200;
    public status = "success";
    public maxAge;
    public minAge;
    public type;
    public count;
    public date;

    constructor(visitor) {
        this.date = moment(visitor.visitDate).format("MM-DD-YYYY");
        this.maxAge = visitor.maxAge;
        this.minAge = visitor.minAge;
        this.type = visitor.type;
        this.count = visitor.totalVisited;
    }
}

export default VisitorResponse;
