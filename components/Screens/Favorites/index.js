import { View, Text, TouchableOpacity,Image,Dimensions, Touchable} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data=[
	{id:1,
	title:"Sahibinden Temiz Lüks",
	address:"İstanbul/Beşiktaş",
	type:"Daire",
	imgUrl:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
	rate:4.2
	},
	{id:2,
		title:" Lüks Havuzlu",
		address:"İstanbul",
		type:"villa",
		imgUrl:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
		rate:4.5
		},
		
]

const Favorites = () => {
	const {width,height}=Dimensions.get("window");
	const deleteFromFavs=()=>{

	}
  return (
	<FlatList
		data={data}
		keyExtractor={(item)=>item.id}
		ItemSeparatorComponent={()=><View style={{
		borderBottomColor: '#f5f7f5',
		 borderBottomWidth: 1.2,
 		 }}/>}
		renderItem={({item})=>(
			<View style={{flexDirection:'row'}}>
			<TouchableOpacity>
				<View style={{flexDirection:"row",width:width/1.2}}>
				
					<Image source={{uri:item.imgUrl}} style={{borderRadius:25,width:100,height:100,marginVertical:5,marginHorizontal:10}}/>
					<View style={{paddingLeft:10,marginTop:20,opacity:0.6}}>
					<Text>{item.title}</Text>
					<Text>{item.address}</Text>
					<Text>{item.type}</Text>
					<Text>{item.rate}</Text>
				</View>

			</View>

			</TouchableOpacity>
		<TouchableOpacity>
			<Ionicons
				name="trash"
				size={20}
				style={{marginVertical:15,}}
			/>
		</TouchableOpacity>
		</View>
	)}
	/>
  )
}

export default Favorites;