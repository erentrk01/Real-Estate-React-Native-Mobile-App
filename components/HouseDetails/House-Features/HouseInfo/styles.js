import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	container: {
		color:'red',
		paddingHorizontal: 30,
		flex:1,
		flexGrow :1
	},
	Text:{
		opacity:0.7
	},
	row:{
		color:'red',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: width/1.2
	},
	HeadStyle:{
		width: width/2,
	},
	seperator:{
		marginVertical: 5,
		borderBottomColor: 'lightgrey',
		borderBottomWidth: 1
	}
})

export default styles;