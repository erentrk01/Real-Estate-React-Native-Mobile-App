import * as React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategorySelect from '../Screens/CategorySelect';
import FilterScreens from '../Screens/FilterScreens/FilterScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/native';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const CategoryStack = ()=>{
return(
	
	<Stack.Navigator >
	<Stack.Screen name="CategorySelect" component={CategorySelect } />
	<Stack.Screen name="FilterScreens" component={FilterScreens} />
	
  </Stack.Navigator>
 
)
}
export default CategoryStack;