import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

import StyledButton from "../../common/StyledButton";


const HouseItem = (props) => {
	const { name, tagline,taglineCTA, image } = props.house;
	
const navigation = useNavigation();

	return(
	<View style={styles.houseContainer}>
		<ImageBackground source={image} style={styles.image}/>
		<View style={styles.titles}>
			<Text style={styles.title}>{name}</Text>
			<Text style={styles.subtitle}>
				{tagline}&nbsp;
				<Text style={styles.subtitleCTA}>{taglineCTA}</Text>
			</Text>
		</View> 

		<View style={styles.buttonsContainer}>
			<StyledButton
			type="primary"
			content={"Custom Order"} 
			onPress={()=>navigation.navigate('Detail')}/>

			<StyledButton
			type="secondary"
			content={"Existing Inventory"}
			onPress={()=>{console.warn("Existing Inventory Pressed")}}/>
		</View>


	</View>);

};


export default HouseItem;