class SuccessResponse {
	public statusid  = 200;
	public status = "Success";
	public message;
	public type;
	public typeId;

	constructor(message, type, typeId) {
		this.message = message;
		this.type = type;
		this.typeId = typeId;
	}
}

export default SuccessResponse;
