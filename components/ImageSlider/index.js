import {View,Text,Image,FlatList,Dimensions, ScrollView} from "react-native";
import React, { useState } from 'react';
import  {imagesDetail}  from "./imagesDetail";
import { images } from "./imagesDetail";
import styles from "./styles";

const ImageSlider = ({nativeEvent}) =>{
	const {height,width} = Dimensions.get('window');

	const advertNo =1;
	const [isDotActive,setIsDotActive] = useState(0);
	const change =({nativeEvent})=>{
		const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
		if(slide !== isDotActive){
			setIsDotActive(slide);
		}
	}

	return(
		<View>
			<ScrollView 
			pagingEnabled
			onScroll={change}
			horizontal 
			showsHorizontalScrollIndicator={false}
			style={{width:width,height:height/2.5}}>
			{
				images.map((image,index)=>(

					<Image
						key={index}
						source={image.src}
						style={[styles.image,{width:width,height:height/2.5}]}
						resizeMode="contain"
					/>
					
				))
				
			}
			</ScrollView>
			<View style={styles.dots}>
			{
				images.map((i,k)=>(
				<Text key={k} style={k=== isDotActive ? styles.activeDot :styles.dot}> ⬤ </Text>))
			}
			</View>
		</View>
	)
}

export default ImageSlider;