import { Text, View ,TextInput} from 'react-native'
import React from 'react'
import Categories from '../Categories';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HighlightRow from '../HighlightRow';
import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
  return (
	<View style={{flex:1,flexGrow:1}}>

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
	<ScrollView>
	<Categories/>
	<HighlightRow
		id="1"
		title="Konumuna Yakın Fırsatlar"
		description="Yakınınızdaki fırsatları keşfedin"
		featuredCategory="Konum"
	/>
		<HighlightRow
		id="2"
		title="Konumuna Yakın Fırsatlar"
		description="Yakınınızdaki fırsatları keşfedin"
		featuredCategory="Reklam"
	/>
		<HighlightRow
		id="3"
		title="Konumuna Yakın Fırsatlar"
		description="Yakınınızdaki fırsatları keşfedin"
		featuredCategory="Fiyat Düşürenler"
	/>
	</ScrollView>
	</View>
  )
}

export default Home;

