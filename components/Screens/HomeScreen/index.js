import { Text, View ,TextInput} from 'react-native'
import React from 'react'
import Categories from '../Categories';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
	<View>
	<View style={styles.container}>
		<View style={styles.searchContainer}>
			<Ionicons
				name="search"
				size={20}
				style={{marginVertical:5,marginHorizontal:5}}
			/>
			<TextInput
				placeholder="Search"
				keyboardType='default'
			/>
		</View>
		<Ionicons
				name="filter"
				size={20}
				style={{marginVertical:5}}
			/>

	</View>
	<Categories/>
	</View>
  )
}

export default Home;

