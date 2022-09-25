import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import userReducer from "./reducers";

const reducer = combineReducers({
	userKeeper:userReducer 
	});
	
	const store = configureStore({ reducer: reducer })

	export default store;

