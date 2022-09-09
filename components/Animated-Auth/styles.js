
import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
 const styles = StyleSheet.create({
	container:{

		flex:1,	
		justifyContent:"flex-end"
	},

	bottomContainer:{
		justifyContent:"center",
		height:height/3,
	},
	button:{
		marginBottom:10,
	}
	
 })

 export default styles;