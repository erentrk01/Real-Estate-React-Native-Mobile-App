
import firebase from './Firebase/firebase';

import { StyleSheet, Text, View } from 'react-native';
import  React,{useEffect,useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from './components/Navigation/AppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



export default function App() {
	const [houses, setHouses] = useState([]);
	const[initializing,setInitializing] = useState(true);
	const[user,setUser] = useState();

	// Handle User State Changes
	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) setInitializing(false);
	}

	console.log(houses);

	useEffect(() => {
		const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	},[])

  return (
	<NavigationContainer >
		<AppStack user={user}/>
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
