import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import HouseItem from './components/HouseItem/index';
export default function App() {
  return (
	<View style={styles.container}>
		<HouseItem/>
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
