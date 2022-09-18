
import {  StyleSheet ,Dimensions} from 'react-native'
const width=Dimensions.get('window').width

const styles = StyleSheet.create({
	container:{
		flexDirection:'row'
	}
	,
	searchContainer:{
		marginLeft:10,
		backgroundColor:'#ebe6e6',
		width:width/1.1,
		height:35,
		flexDirection:'row',
		borderRadius:10
	}
})

export default styles;