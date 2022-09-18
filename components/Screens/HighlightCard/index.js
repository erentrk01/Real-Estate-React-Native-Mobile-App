import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';

const HighlightCard= ({
	id,
	imgUrl,
	title,
	rating,
	address,
	shortDescription,
	type,
	long,
	lat
}) => {
  return (
	<TouchableOpacity style={{backgroundColor:'white'}}>
	 <Image
	 	source={{uri:imgUrl}}
		style={{width: 220, height: 150, borderRadius: 5,marginHorizontal:5}}
	/>
	<View style={{paddingHorizontal:10,paddingBottom:10}}>
		<Text style={{fontWeight:"500"}}>{title}</Text>
		<View>
			<Ionicons
				name="star"
				size={20}
				opacity={0.5}
				color="green"
				/>
			<Text style={{opacity:0.5,color:"gray"}}>
				<Text
					style={{color:"green"}}
				>{rating} - {type}</Text>
			</Text>

		</View>
		<View style={{flexDirection:"row"}}>
			<Ionicons
				name="location-outline"
				size={20}
				opacity={0.5}
				/>
				
				<Text>&nbsp;-&nbsp;{address}</Text>
		</View>
	</View>

	</TouchableOpacity>
	  

  )
}

export default HighlightCard;