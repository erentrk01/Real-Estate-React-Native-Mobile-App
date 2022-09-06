import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

import StyledButton from "../StyledButton";


const HouseItem = () => {
	return(
	<View style={styles.houseContainer}>
		<ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image}/>
		<View style={styles.titles}>
			<Text style={styles.title}> Model S hey</Text>
			<Text style={styles.subtitle}>Starting at $69,420</Text>
			<StyledButton/>
		</View> 

	</View>);

};


export default HouseItem;