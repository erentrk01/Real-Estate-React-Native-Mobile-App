import {View,Text,Image,FlatList,Dimensions} from "react-native";
const ImageSlider = () =>{
	const {height,width} = Dimensions.get('window');
	return(
		<View>
		<Image 
		source={require('../../assets/images/home1.jpeg')}
		style={{width:width,height:height/2.5,resizeMode:'contain'}}/>

		</View>
	)
}

export default ImageSlider;