
import db from './Firebase/firebase';
import {collection, onSnapshot} from 'firebase/firestore';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from './components/Navigation/AppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



export default function App() {
	const [houses, setHouses] = React.useState([]);
	console.log(houses);
	React.useEffect(() => 
		// listen real-time updates
		onSnapshot(collection(db, 'houses'), (snapshot) => {
		setHouses(snapshot.docs.map(doc => doc.data()));
		})) 
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
