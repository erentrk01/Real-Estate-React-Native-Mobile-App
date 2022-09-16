/*import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoryTemplate({subFilters}) {

	const subArray=[];
	console.log(subFilters);
	const setCategoryMain=(e)=>{
		const filterName = e.target.value;
		if(filterName =='Konut')
		subArray.push('	Satılık','Kiralık');
	}
  return (
	<View>
			<View style={styles.stepBy}>
			<FlatList
				data={subArray.length == 0 ? subFilters :subArray}
				contentContainerStyle={{
					 flexGrow: 1 }}
					 renderItem={({item,index})=> (
						<View>
						<View  style={styles.row} key={index}>
							<TouchableOpacity>
								<Text onPress={setCategoryMain}>{item.name}</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.seperator}/>
						</View>

					)} />
		</View>

	</View>
  )
}

const styles = StyleSheet.create({
	row:{
		color:'black',
		marginVertical:10,
		marginLeft:10
	},
	seperator:{
		marginVertical: 5,
		opacity:0.6,
	borderBottomColor: 'lightgrey',
	borderBottomWidth: 1
	}
})*/