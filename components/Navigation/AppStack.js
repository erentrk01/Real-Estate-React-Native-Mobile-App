import React from "react";
import { View, Text} from "react-native";


import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HouseDetails from "../HouseDetails";
import HouseList from "../HouseList";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../Screens/Profile";
import PutUpForSale from "../Screens/PutUpForSale";
import { CustomDrawer} from "../CustomDrawer/index";
const Drawer = createDrawerNavigator();


const AppStack = () => {
	return (

			<Drawer.Navigator
			 screenOptions={{
				headerShown:false,
				drawerActiveBackgroundColor: '#aa18ea',
				drawerActiveTintColor: '#fff',
				drawerLabelStyle: {
         			 marginLeft: -20,
          			fontSize: 15, },
				}} >
				<Drawer.Screen 
					name="HouseList"
					component={HouseList}
					options={{
						drawerIcon: ({color}) => (
							<Ionicons name="home-outline" size={22} color={color} />
						)}}
					/>
				<Drawer.Screen 
					name="Detail" 
					component={HouseDetails}
					options={{
						drawerIcon: ({color}) => (
							<Ionicons name="md-cellular" size={22} color={color} />
						)}}
					/>
				<Drawer.Screen 
					name="Profile" 
					component={Profile}
					options={{
						drawerIcon: ({color}) => (
							<Ionicons name="person-outline" size={22} color={color} />),
						}}
					/>
				<Drawer.Screen 
					name="PutUpForSale" 
					component={PutUpForSale}
					options={{
						drawerIcon: ({color}) => (
							<MaterialCommunityIcons name="sale" size={22} color={color} />),
						}}
					
					/>
			</Drawer.Navigator>
	

	
		
	  );
}

export default AppStack;