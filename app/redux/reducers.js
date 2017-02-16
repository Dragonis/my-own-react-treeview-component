import  { combineReducers } from 'redux';



export const userReducer = (
	state =
	{
		number: "Numer",
		description: "Opis",
		amount: 300,
		multipier: 2,
		total: 0,
		fulltotal: 0,
        numberchilds: 10
	}
	,action) => {

	switch(action.type) {
		case "CHANGE_DESCRIPTION": { 
			state = {...state, description: action.payload} 
			break; 
			}
		case "CHANGE_NUMBER": {
			state = {...state, number: action.payload}
			break; 
			}
        case "CHANGE_AMOUNT": {
            state = {...state, amount: action.payload}
            break;
        }
        case "CHANGE_MULTIPIER": {
            state = {...state, multipier: action.payload}
            break;
        }
        case "CHANGE_TOTAL": {
            state = {...state, total: action.payload}
            break;
        }
        case "GET_MULTIPIER": {
            state = {...state}
            break;
        }
        case "GET_TOTAL": {
            state = {...state}
            break;
        }
        case "SET_FULL_TOTAL": {
            state = {...state, fulltotal: action.payload}
            break;
        }
        case "GET_FULL_TOTAL": {
            state = {...state}
            break;
        }
        case "SET_NUMBER_CHILDS": {
            state = {...state, numberchilds: action.payload}
            break;
        }
        case "GET_NUMBER_CHILDS": {
            state = {...state}
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

