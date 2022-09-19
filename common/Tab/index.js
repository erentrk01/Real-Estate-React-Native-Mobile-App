import React,{Component,useState} from "react"
import {Text,View} from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
const Tab = ({data})=>{
	const [isActiveTab,setIsActiveTab] = useState(0);
	

	return (
		<View style={styles.container} >
			<View style={styles.header}>
				{data.map((item,index)=>(
				<TouchableOpacity style={[styles.headerView, index === isActiveTab ? styles.headerViewActive:'']} key={index} onPress={()=>{setIsActiveTab(index)}}>
					<Text>{item.title}</Text>
				</TouchableOpacity>
				))}
			</View>
			<View style={styles.border}></View>
			
			<View style={styles.content}>
				<ScrollView>
				{
					data.map((item,index)=>{
					if (isActiveTab === index) return <Text key={index}>{item.content}</Text> 
					})
				}
				</ScrollView>

			</View>
			
		</View>
	)
}

export default Tab;