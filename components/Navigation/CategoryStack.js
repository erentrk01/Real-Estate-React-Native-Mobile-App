import * as React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategorySelect from '../Screens/CategorySelect';
import FilterScreens from '../Screens/FilterScreens/FilterScreens';


import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const CategoryStack = ()=>{
return(
	
	<Stack.Navigator initialRouteName='AppStack'>
	
	<Stack.Screen name='AppStack' component={AppStack}/>
	<Stack.Screen name="CategorySelect" component={CategorySelect}/>
	<Stack.Screen name="FilterScreens" component={FilterScreens}/>
	 </Stack.Navigator>
)
}
export default CategoryStack;