import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import CategoryCard from './CategoryCard';

 const Categories=()=> {
  return (
	<View>
		<ScrollView 
			horizontal
			contentContainerStyle={{paddingHorizontal:15,paddingTop:10}}
			showsHorizontalScrollIndicator={false} >

			<CategoryCard 
				imgUrl="https://parisinsaat.com/wp-content/uploads/2022/06/skala-01.jpeg" 
				title="Flat"
			/>
			<CategoryCard
				imgUrl="https://media-blog.zingat.com/uploads/2017/09/mustakil-690x460.jpg"
				title="Villa"
			/>
			<CategoryCard
				imgUrl="https://sbr.com.sg/sites/default/files/styles/article_node_main_image/public/2022-02/sg-office-space.jpg?h=588d7f0f&itok=MjcjSPdU"
				title="Office"
			/>
			<CategoryCard
				imgUrl="https://visitorlando.widen.net/content/uesdmqpvde/jpeg/3123_resort_overview_2.jpg?crop=true&position=c&q=80&color=ffffffff&u=c4dqed&w=575&h=375&quality=80"
				title="Turistik Tesis"
			/>
			<CategoryCard
				imgUrl="https://cdn.emlakkulisi.com/resim/orjinal/NzU3NjYyOT-85-bin-tlye-ev-sahibi-olabilirsiniz-prefabrik-ev-fiyatlari-ne-kadar-iste-4-haziran-2022-fiyat-listesi.jpg"
				title="Prefabrik Ev"
			/>
			<CategoryCard
				imgUrl="https://images.endeksa.com/sistem/blog/5-buyuk-ilde-arsa-fiyatlari-son-bir-yilda-14-ile-47-arasinda-artti.jpg?t=2020-12-22T08:21:19.85"
				title="Arsa"
			/>
		</ScrollView>
	</View>
  )
}

export default Categories;