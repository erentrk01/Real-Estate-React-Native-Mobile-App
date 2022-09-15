import React from "react"
import {View,ScrollView,Text,Dimensions} from "react-native"
import { FlatList } from "react-native-gesture-handler";


import styles from "./styles";



const HouseInfo =(props) => {

 const data=[
	{feature:"Fiyat",value:"$1,000,000"},
	{feature:"Oda Sayısı",value:"4"},
	{feature:"Banyo Sayısı",value:"1"},
	{feature:"Isınma",value:"gaz sobası"},
	{feature:"Odas Sayısı",value:"4"},
	{feature:"Bansssyo Sayısı",value:"1"},
	{feature:"Isssınma",value:"gaz sobası"},
	{feature:"Odssa Sayısı",value:"4"},
	{feature:"Odsa Sayısı",value:"4"},
	{feature:"Bansyo Sayısı",value:"1"},
	{feature:"Isısnma",value:"gaz sobası"},
 ];

	return(
		<View style={styles.container}>


			
				<FlatList

					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
					 flexGrow: 1,flex:1 }}
					data={data}
					snapToAlignment={'start'}
					decelerationRate={'fast'}
					snapToInterval={Dimensions.get('window').height}


					renderItem={({item,index})=> (
						<View>
						<View  style={styles.row} key={index}>
							<Text style={styles.Text} >{item.feature}</Text>
							<Text style={styles.Text}>{item.value}</Text>
						</View>
						<View style={styles.seperator}/>
						</View>

					)}/>


	  </View>
	)
}

export default HouseInfo;