import React from "react";
import { View,FlatList,Dimensions,Pressable,Text} from "react-native";

import HouseItem from "../HouseItem";
import houses from "./houses";
import styles from "./styles";


const HouseList= ({navigation}) => {
	

	//console.log(houses);	
	return(
	<View style={styles.container}>


		<FlatList
			data={houses}
			renderItem={({item})=> <HouseItem house={item}/>}
			snapToAlignment={'start'}
			decelerationRate={'fast'}
			snapToInterval={Dimensions.get('window').height}
			showsVerticalScrollIndicator={false}
		/>
	
	</View>);

}
export default HouseList;