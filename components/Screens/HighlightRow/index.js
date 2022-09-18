import {  Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import HighlightCard from '../HighlightCard';
const HighlightRow = ({id,title,description,featuredCategory}) => {
  return (
	<View>
	<View style={styles.container}>
	  <Text style={{fontWeight:"800"}}>{title}</Text>

	  <Ionicons
				name="md-arrow-forward-outline"
				size={20}
				style={{marginVertical:5,paddingLeft:20}}
				color="#0fc1d1"
			/>

	</View>
	<Text style={{paddingLeft:10}}>{description}</Text>
	<ScrollView
		horizontal
		contentContainerStyle={{paddingHorizontal:15}}
		showsHorizontalScrollIndicator={false}
		style={{paddingTop:10}}
	>
		<HighlightCard
			id="1"
			imgUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
			title="Sahibinden Temiz Lüks"
			address="İstanbul/Beşiktaş"
			rating={4.2}
			shortDescription="Avmye 100 mt uzaklıkta"
			type="Daire"
			price={100.000}
			long={28.9744}
			lat={21.4289}
			/>
	<HighlightCard
			id="1"
			imgUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
			title="Sahibinden Temiz Lüks"
			address="İstanbul/Beşiktaş"
			rating={4.2}
			shortDescription="Avmye 100 mt uzaklıkta"
			type="Daire"
			price={100.000}
			long={28.9744}
			lat={21.4289}
			/>

	
	</ScrollView>
	</View>
  )
}

export default HighlightRow;

