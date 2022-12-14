import React ,{useEffect, useState}from "react";
import { View, Text} from "react-native";
import {firebase} from '../../Firebase/firebase';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HouseDetails from "../HouseDetails/HouseDetail-Main/index";
import HouseList from "../HouseList";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../Screens/Profile";
import PutUpForSale from "../Screens/PutUpForSale";
import Categories from "../Screens/Categories";
import HouseItem from "../HouseItem";
import Home from "../Screens/HomeScreen";
import Favorites from "../Screens/Favorites";
import AnimatedAuth from "../Animated-Auth";

import {DevSettings} from 'react-native';
import { useSelector,useDispatch } from "react-redux";

import { KeepUser } from "../../Store/reducers";
import ProfileStack from "./ProfileStack";
import EditProfile from "../Screens/EditProfile";

const Drawer = createDrawerNavigator();



const AppStack = ({user}) => {
	const verified = useSelector(state=>state.userKeeper.verified);
	const dispatch = useDispatch();
	firebase.auth()?.currentUser?.reload();

	
	
	useEffect(()=>{
		dispatch(KeepUser());
		console.log(verified +"verified sta")
	},[verified])
	return (
			
			<Drawer.Navigator
			 screenOptions={{
				headerShown:true,
				drawerActiveBackgroundColor: '#aa18ea',
				drawerActiveTintColor: '#fff',
				drawerLabelStyle: {
         			 marginLeft: -20,
          			fontSize: 15, },
				}} >
				
				
			{(user && verified)  ? (
				
				<>
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
					<Drawer.Screen 
					name="Favorites" 
					component={Favorites}
					options={{
						drawerIcon: ({color}) => (
							<Ionicons name="star" size={22} color={color} />),
						}}
					
					/>
					<Drawer.Screen 
					name="LogOut" 
					component={AnimatedAuth}
					options={{
						drawerIcon: ({color}) => (
							<Ionicons name="exit-outline" size={22} color={color} />),
						}}
					
					/>

			<Drawer.Screen 
			name="EditProfile" 
			component={EditProfile}
			options={{
						drawerIcon: ({color}) => (
							<Ionicons name="exit-outline" size={22} color={color} />),
						}}
			headerTitleAlign="center"
			headerStyle={{shadowColor:'#fff',elevation:0}}
			/>
					
					
					</>
					):
				(
				<>
				<Drawer.Screen 
				name="AnimatedAuth"
				component={AnimatedAuth}
				options={{
					drawerIcon: ({color}) => (
						<Ionicons name="star" size={22} color={color} />),
				}}
					
					/>

			<Drawer.Screen 
					name="Home"
					component={Home}
					options={{
						drawerIcon: ({color}) => (
							<Ionicons name="home-outline" size={22} color={color} />
						)}}
					/>
		
				</>
					)}
			</Drawer.Navigator>



	  );
}

export default AppStack;