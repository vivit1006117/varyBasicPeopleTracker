import * as messages from "../responses/ErrorMessages";
import * as status from "../responses/ErrorStatus";
import * as statusIds from "../responses/ErrorStatusId";

class ErrorResponse {
	public statusId;
	public status;
	public message;

	constructor(errorType) {
		this.statusId = statusIds[errorType];
		this.message = messages[errorType];
		this.status = status[errorType];
	}
}

export default ErrorResponse;
