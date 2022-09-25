import { createSlice } from "@reduxjs/toolkit";
import {firebase} from "../Firebase/firebase";

const initialState={
	verified:false,

}

const userSlice=createSlice({
	name:"userKeeper",
	initialState,
	reducers:{
		KeepUser:(state)=>{
			if(firebase.auth().currentUser){
			console.log(firebase.auth().currentUser)
			state.verified=firebase.auth().currentUser.emailVerified;
			console.log(state.verified + "sliceda");
			}
		}
	}


})

export const {KeepUser} = userSlice.actions;
export default userSlice.reducer;


