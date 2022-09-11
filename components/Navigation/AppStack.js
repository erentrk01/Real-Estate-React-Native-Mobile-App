import React from "react";
import { View, Text} from "react-native";



import HouseDetails from "../HouseDetails";
import HouseList from "../HouseList";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();


const AppStack = () => {
	return (

			<Drawer.Navigator screenOptions={{headerShown:false}}>
			<Drawer.Screen name="HouseList" component={HouseList}/>
			<Drawer.Screen name="Detail" component={HouseDetails}/>

	
			</Drawer.Navigator>
	

	
		
	  );
}

export default AppStack;