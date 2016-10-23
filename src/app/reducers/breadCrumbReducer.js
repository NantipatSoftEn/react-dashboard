const initialState = [];
const breadCrumbReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_BREAD_CRUMB':
		console.log(state);
			return Object.assign({}, state);
		break;

		case 'SPREAD_BREAD_CRUMB':
			return Object.assign({}, state, action.payload);
		break;

		default:
			return state;
	}
}

export default breadCrumbReducer;
