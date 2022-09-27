import React,{ useState } from "react";
import { View,Text,FlatList,TouchableOpacity,ActivityIndicator} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CategoryTemplate from "../../../common/CategoryTemplate";

import { NavigationContainer } from '@react-navigation/native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import StyledButton from "../../../common/StyledButton";
import  storage from '@react-native-firebase/storage'

const PutUpForSale = () => {
	const navigation = useNavigation();
	const initCategories=[
		{name:"Konut"},
		{name:"İş Yeri"},
		{name:"Arsa"},
		{name:"Bina"},
		{name:"Turistik Tesis"},

	];

const [categoryMain,setCategoryMain]= useState(initCategories);
const [subArray,setSubArray]=useState([]);
const [images,setImages]=useState([]);
const[isLoading,setIsLoading]=useState(false);

const pickImages = async()=>{
	setIsLoading(true);
	let result = await ImagePicker.launchImageLibraryAsync({
		mediaTypes: ImagePicker.MediaTypeOptions.Images,
		allowsMultipleSelection:true,
		selectionLimit:10,
		aspect:[4,3],
		quality:1
	});
	setImages(result);
	setIsLoading(false);

	//if(!result.cancelled){
		//setImages(result.uri ? [result.uri]:result.selected);
		uploadImages();
	//}
}

const uploadImages = async () => {
	setIsLoading(true);
	try{console.log(images)
		let modifiedArr = images.map((element)=>{
			const reference = storage().ref(`MyImages/${element.name}`);
			const task = reference.putFile(element.fileCopyUri.replace("file://",""));
			task.on('state_changed',taskSnapshot=>{
				setProcess(`
				${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}
				`);
			})

		task.then(()=>{
			alert('uploaded ');
			setProcess('');
		})

		setImages([]);

		})
	}
	catch(err){
		alert(err);
	}
	setIsLoading(false);

}


	return(

		<View>
		<View>
			<Text style={styles.header}>KELİME İLE KATEGORİ SEÇİMİ</Text>
		</View>
		
			<TextInput style={styles.textInput}/>
			<View style={styles.seperator}></View>
		<View>
			<Text style={styles.header}>ADIM ADIM KATEGORİ SEÇİMİ</Text>
			<View style={styles.seperator}></View>
		</View>
		<View style={styles.stepBy}>

		
		</View>
		<StyledButton onPress={pickImages} content="Pick Images"/>
		{isLoading && <ActivityIndicator size="small" color="#0000ff"/>}
		</View>
		
	)

}

export default PutUpForSale;