import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";


const HouseItem = (props) => {
	<View style={styles.houseContainer}>
		<ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image}/>
		<View style={styles.titles}>
			<Text style={styles.title}>Eren Model S hey</Text>
			<Text style={styles.subtitle}>Starting at $69,420</Text>
		</View> 

	</View>

};


export default HouseItem;