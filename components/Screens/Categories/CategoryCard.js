import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


 const CategoryCard=({imgUrl,title})=> {
  return (
	<TouchableOpacity>



		<Text>{title}</Text>
		<Image
			source={{uri:imgUrl}}
			style={{width: 110, height: 110, borderRadius: 5,marginHorizontal:5}}
			/>
	</TouchableOpacity>

  )
}

export default CategoryCard;