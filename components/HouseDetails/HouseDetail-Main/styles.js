import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	slideContainer: {
		top:20,

	},
	title:{
		alignItems: 'center',
		width: "100%",
	},
	member:{
		justifyContent: 'center',
		alignItems: 'center',
		top:-10
	},
	memberDate:{
		fontSize: 12,
		opacity: 0.5
	},
	name:{
		fontWeight:'bold'
	},
	estateType:{
	
		alignItems: 'center',
		
	},
	estateTypeText:{
		color:"blue",
		opacity:0.7
	},
	memberAddress:{
		alignItems: 'center',
		opacity:0.5,

	},
	memberAddressText:{
		fontSize:12
	}

});

export default styles;