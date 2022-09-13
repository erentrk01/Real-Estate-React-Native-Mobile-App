import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
	headerView: {
		borderWidth: 1,
		padding: 15,
		width: width/3.6,
		height: height/16,
		borderBottomWidth: 0,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		textAlign: 'center',

	},
	headerViewActive:{
		backgroundColor:'#FFCE33'
	},
	header:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 30,


	},
	border:{
		borderBottomWidth: 1,
		borderBottomColor: '#FFCE33',
	}
})

export  default styles;