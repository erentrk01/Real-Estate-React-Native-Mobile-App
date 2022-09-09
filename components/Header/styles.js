import { StyleSheet, Dimensions } from "react-native";
 const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 50,
		zIndex: 100,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 20
	},
	logo: {
		width: 30,
		height: 30,
		resizeMode: 'contain',
	},
	menu: {
		width: 35,
		height: 35,
		resizeMode: 'contain'
	}
});

export default styles;