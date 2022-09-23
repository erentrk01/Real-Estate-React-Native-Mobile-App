
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
	},
	textInput:{
		height:35,
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		borderRadius:25,
		marginHorizontal:20,
		marginVertical:10,
		paddingLeft:10,
		width:"90%",
	},
	formContainer:{
		marginBottom:0,
		zIndex:-1,
		...StyleSheet.absoluteFill,
		justifyContent:"center"
	},
	closeBtnContainer:{
		height:40,
		width:40,
		top:-20,
		justifyContent:"center",
		alignSelf:"center",
		shadowColor:"#000",
		shadowOffset:{
			width:0,
			height:5
		},
		shadowOpacity:0.34,
		shadowRadius:6.27,
		elevation:1,
		backgroundColor:"white",
		alignItems:"center",
		borderRadius:20

	},
	error:{
		textAlign:"center",
		color:"red",
		
	}
	
 })

 export default styles;