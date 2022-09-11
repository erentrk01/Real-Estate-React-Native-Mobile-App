import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './components/Header';
import HouseList from './components/HouseList/index';
import AnimatedAuth from './components/Animated-Auth';
import HouseDetails from './components/HouseDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Detail" component={HouseDetails} options={{headerShown:false}}/>
			<Stack.Screen name="AnimatedAuth" component={AnimatedAuth} options={{headerShown: false}} />
			<Stack.Screen name="HouseList" component={HouseList} options={{headerShown: false}} />

		</Stack.Navigator>

	</NavigationContainer>

	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
