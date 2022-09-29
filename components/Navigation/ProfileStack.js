import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from '../Screens/EditProfile';

const Stack = createNativeStackNavigator();
const ProfileStack =()=>{
	return(
		<Stack.Navigator>
			<Stack.Screen 
			name="Profile"
			component={Profile}
			options={{headerShown:false}}
			/>
			<Stack.Screen 
			name="EditProfile" 
			component={EditProfile}
			options={{headerTitle:'Edit Profile'}}
			headerBackTitleVisible={false}
			headerTitleAlign="center"
			headerStyle={{shadowColor:'#fff',elevation:0}}
			/>
		</Stack.Navigator>
	)
}

export default ProfileStack;