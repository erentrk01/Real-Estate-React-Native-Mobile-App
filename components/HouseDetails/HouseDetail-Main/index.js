import React from "react";
import { View,Text} from "react-native";
import Tab from "../../../common/Tab";
import ImageSlider from "../../ImageSlider/index";
import HouseInfo from "../House-Features/HouseInfo";
import styles from "./styles";


const HouseDetails =() => {

	  return (
	<View style={styles.slideContainer}>
		<View style={styles.title}>
			<Text >2+1 Ara Kat Temiz</Text>
		</View>
		<View >
			<ImageSlider/>
		</View>
		<View style={styles.member}>
			<Text style={styles.name}>Eren Tarak</Text>
			<Text style={styles.memberDate}>Üyelik tarihi Şubat 2010</Text>
		</View>
		<View
		style={{
		borderBottomColor: 'grey',
		borderBottomWidth: 0.3,
		}}/>
		<View style={styles.estateType}>
			<Text style={styles.estateTypeText}>Emlak > Konut > Satılık > Müstakil</Text>
		</View>
		<View style={styles.memberAddress}>
			<Text style={styles.memberAddressText}>Ankara,Çankaya,Ümit Mah.</Text>
		</View>
		<View style={styles.tab}>
			<Tab
			data={[
				{title:"İlan Bilgileri",content:<HouseInfo/>},
				{title:"Açıklama",content:<Text>Content2</Text>},
				{title:"Konumu",content:<Text>Content3</Text>},
			]}
			/>
		</View>


	</View>
  );
}

export default HouseDetails;