import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';



import Header from './components/Header';
import HouseList from './components/HouseList/index';
import AnimatedAuth from './components/Animated-Auth';
import HouseDetails from './components/HouseDetails/HouseDetail-Main/index';

import AppStack from './components/Navigation/AppStack';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
	<NavigationContainer >
	
	<AppStack/>

	
			
	



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
