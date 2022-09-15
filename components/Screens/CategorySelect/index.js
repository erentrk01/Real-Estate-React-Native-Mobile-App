import React from "react";
import { View,Text,FlatList,TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryTemplate from "../../../common/CategoryTemplate";

const Stack = createNativeStackNavigator();

const CategorySelect = () =>{

	const categoryMain=[
		{name:"Konut"},
		{name:"İş Yeri"},
		{name:"Arsa"},
		{name:"Bina"},
		{name:"Turistik Tesis"},

	];


return(
	<CategoryTemplate subFilters={categoryMain}/>


)




}

export default CategorySelect;