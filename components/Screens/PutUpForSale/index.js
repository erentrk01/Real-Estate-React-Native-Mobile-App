import React from "react";
import { View,Text,FlatList,TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CategoryTemplate from "../../../common/CategoryTemplate";
import CategorySelect from "../CategorySelect";
import { NavigationContainer } from '@react-navigation/native';
import styles from "./styles";


const PutUpForSale = () => {

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

				<CategorySelect></CategorySelect>

		</View>

		</View>
		
	)

}

export default PutUpForSale;