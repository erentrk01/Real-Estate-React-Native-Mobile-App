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
			<Text style={styles.price}>Satıcı ismi</Text>
			<Text style={styles.date}>Üyelik tarihi</Text>
			<Text style={styles.address}>Üye adresi</Text>
		</View>
		<View>

		</View>
	</View>
  );
}

export default HouseDetails;