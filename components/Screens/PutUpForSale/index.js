import React from "react";
import { View,Text} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";
const PutUpForSale = () => {
	return(

		<View>
		<View>
			<Text style={styles.header}>KELİME İLE KATEGORİ SEÇİMİ</Text>
		</View>
			<TextInput style={styles.textInput}/>
			<View style={styles.seperator}></View>

		</View>
	)


};

export default PutUpForSale;