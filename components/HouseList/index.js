import React from "react";
import { View,FlatList } from "react-native";

import HouseItem from "../HouseItem";
import houses from "./houses";
import styles from "./styles";


const HouseList= () => {
	

	//console.log(houses);	
	return(
	<View style={styles.container}>
		<FlatList
			data={houses}
			renderItem={({item})=> <HouseItem house={item}/>}
		/>
	
	</View>);

}
export default HouseList;