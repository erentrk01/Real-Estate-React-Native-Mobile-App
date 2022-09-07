import React from "react";
import { View, Text,Pressable } from "react-native";
import styles from "./styles";


const StyledButton = (props) => {	

	const {type,content,onPress} = props;

	const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
	const texColor = type === 'primary' ? '#FFFFFF' : '#171A20';	

	return(
		<View>
			<Pressable 
			style={[styles.button,{backgroundColor:backgroundColor}]}
			onPress={()=>onPress()}
			>
				<Text style={[styles.text,{color:texColor}]}>{content}</Text>
			</Pressable>

		</View> );

};


export default StyledButton;