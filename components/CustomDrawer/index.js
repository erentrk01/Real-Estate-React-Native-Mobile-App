import { View,Text } from "react-native";
import { DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer";

const CustomDrawer = (props) =>{
	return(
	<View style={{flex:1}}>
		<DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#8200d6'}}>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
		<View>
		
		</View>
	</View>
	)
}

export default CustomDrawer;