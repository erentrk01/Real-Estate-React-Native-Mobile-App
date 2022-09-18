
import {  StyleSheet ,Dimensions} from 'react-native'
const width=Dimensions.get('window').width

const styles = StyleSheet.create({
	container:{
		marginTop:20,
		flexDirection:'row',
		justifyContent:'space-between',
		paddingHorizontal:10
	}

})

export default styles;