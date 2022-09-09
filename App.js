import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import HouseList from './components/HouseList/index';

export default function App() {
  return (

	<View style={styles.container}>
		<Header></Header>
		<HouseList></HouseList>
		<StatusBar style="auto" />
	</View>
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
