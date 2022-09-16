import React, { useState } from "react";
import { View,Text,FlatList,TouchableOpacity} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles';
import FilterScreens from "../FilterScreens/FilterScreens";
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const CategorySelect = () =>{
	
	const navigation = useNavigation();
	const initCategories=[
		{name:"Konut"},
		{name:"İş Yeri"},
		{name:"Arsa"},
		{name:"Bina"},
		{name:"Turistik Tesis"},

	];

const [categoryMain,setCategoryMain]= useState(initCategories);
const [subArray,setSubArray]=useState([]);
	



return(
	
			<View style={styles.stepBy}>
			<FlatList
			data={categoryMain}
				contentContainerStyle={{
					 flexGrow: 1 }}
			 renderItem={({item,index})=> (
						<View>
						<View  style={styles.row} key={index}>
							<TouchableOpacity onPress={()=> navigation.navigate('FilterScreens')} >
								<Text >{item.name}</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.seperator}/>
						</View>

					)}
				
					 />
		</View>



)




}

export default CategorySelect;