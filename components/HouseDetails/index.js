import React from "react";
import { View,Text} from "react-native";
import ImageSlider from "../ImageSlider/index";
import styles from "./styles";


const HouseDetails =() => {

	  return (
	<View>
		<View>
			<Text style={styles.title}>HouseDetails title</Text>
		</View>
		<View>
			<ImageSlider/>
		</View>
		<View style={styles.member}>
			<Text style={styles.name}>Eren Tarak</Text>
			<Text style={styles.date}>Üyelik tarihi</Text>
			<Text style={styles.address}>Üye adresi</Text>
		</View>
		<View
		style={{
		borderBottomColor: 'grey',
		borderBottomWidth: 0.3,
		}}/>
		<View>
		
		</View>
	</View>
  );
}

export default HouseDetails;