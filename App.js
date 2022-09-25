
import {firebase} from './Firebase/firebase';

import { StyleSheet, Text, View } from 'react-native';
import  React,{useEffect,useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from './components/Navigation/AppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { set } from 'react-native-reanimated';
import { Provider } from 'react-redux';
import store  from './Store/index';
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
1
	console.log(houses);

	useEffect(() => {
	
		const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	},[])

  return (
	<Provider store={store}>
		<NavigationContainer >
			<AppStack user={user} />
		</NavigationContainer>
	</Provider>
	
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
