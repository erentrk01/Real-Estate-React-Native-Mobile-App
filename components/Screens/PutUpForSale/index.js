import React,{ useState } from "react";
import { View,Text,FlatList,TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CategoryTemplate from "../../../common/CategoryTemplate";

import { NavigationContainer } from '@react-navigation/native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const PutUpForSale = () => {
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

		<View>
		<View>
			<Text style={styles.header}>KELİME İLE KATEGORİ SEÇİMİ</Text>
		</View>
		
			<TextInput style={styles.textInput}/>
			<View style={styles.seperator}></View>
		<View>
			<Text style={styles.header}>ADIM ADIM KATEGORİ SEÇİMİ</Text>
			<View style={styles.seperator}></View>
		</View>
		<View style={styles.stepBy}>

		
		</View>
		</View>
		
	)

}

export default PutUpForSale;