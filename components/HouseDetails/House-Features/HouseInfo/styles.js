import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
	},
	row:{
		marginHorizontal:30
	}
})

export default styles;