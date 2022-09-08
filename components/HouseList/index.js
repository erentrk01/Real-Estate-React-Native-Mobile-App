import React from "react";
import { View,FlatList,Dimensions} from "react-native";

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
			snapToAlignment={'start'}
			decelerationRate={'fast'}
			snapToInterval={Dimensions.get('window').height}
		/>
	
	</View>);

}
export default HouseList;