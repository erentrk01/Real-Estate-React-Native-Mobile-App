import React,{ useState } from "react";
import { View,Text,FlatList,TouchableOpacity,ActivityIndicator} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CategoryTemplate from "../../../common/CategoryTemplate";

import { NavigationContainer } from '@react-navigation/native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import StyledButton from "../../../common/StyledButton";
import  storage, { firebase } from '@react-native-firebase/storage'
import { firebaseConfig } from "../../../Firebase/firebase";
const PutUpForSale = () => {

	if(!firebase.apps.length){
		firebase.initializeApp(firebaseConfig);
	}
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
const[image,setImage]=useState(null);
const[isLoading,setIsLoading]=useState(false);


const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

const uploadImage = async () => {
	const blob = await new Promise((resolve, reject) => {
	  const xhr = new XMLHttpRequest();
	  xhr.onload = function() {
		resolve(xhr.response);
	  };
	  xhr.onerror = function(e) {
		console.log(e);
		reject(new TypeError('Network request failed'));
	  };
	  xhr.responseType = 'blob';
	  xhr.open('GET', image, true);
	  xhr.send(null);
	});

	const ref = storage().ref().child(new Date().toISOString());
	const snapshot = await ref.put(blob);

	snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED, ()=>{
		setIsLoading(true);

	}
	, (error)=>{
		setIsLoading(false);
		setIsLoading(false);
		console.log(error);
		alert("Hata oluştu");
		blob.close();
		return;
	},
	()=>{
		snapshot.ref.getDownloadURL().then((downloadURL)=>{
			setIsLoading(false);
			console.log("Success");
			console.log(downloadURL);
			blob.close();
			return downloadURL;
		})

	}
	)
}

const pickImages = async()=>{
	setIsLoading(true);
	let result = await ImagePicker.launchImageLibraryAsync({
		mediaTypes: ImagePicker.MediaTypeOptions.Images,
		allowsMultipleSelection:true,
		selectionLimit:10,
		aspect:[4,3],
		quality:1
	});
	//setImages(result);
	
	setIsLoading(false);

	if(!result.cancelled){
		setImages(result.uri ? [result.uri]:result.selected);
		uploadImages(images);
	}
}

const uploadImages = async (images) => {
	setIsLoading(true);
	try{console.log(images)
		images.map(async (element)=>{
			console.log(element)		
			const reference = storage().ref(`/MyImages/${element.uri}`);
			const task = reference.putFile(element.uri.replace("file://",""));
			task.on('state_changed',taskSnapshot=>{
				setProcess(`
				${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}
				`);
			})

		task.then(()=>{
			alert('uploaded ');
			setProcess('');
		})
		
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
		<StyledButton onPress={pickImage} content="Pick Images"/>
		{isLoading && <ActivityIndicator size="small" color="#0000ff"/>}
		</View>
		
	)

}

export default PutUpForSale;