import  { combineReducers } from 'redux';

export const userReducer = (state = { description: "test", value: 0 }, action) => {
	switch(action.type) {
		case "CHANGE_DESCRIPTION": { 
			state = {...state, description: action.payload} 
			break; 
			}
		case "CHANGE_VALUE": { 
			state = {...state, value: action.payload} 
			break; 
			}
		// default: state = {...state, message: "default-switch"} ; break;

	}
	return state;
};

export const tweetsReducer = (state = [], action) => {
	return state;
};

export const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
});

export default reducers;

