import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import {firebase} from "../../../Firebase/firebase";


const EditProfile= () => {
	const [image, setImage] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [transferred, setTransferred] = useState(0);
	const [userData, setUserData] = useState(null);

	const getUser = async () => {
		const currentUser = await firebase.auth().currentUser;
		const uid = currentUser.uid;
		const usersRef = firebase.firestore().collection('users');
		const snapshot = await usersRef.doc(uid).get();
		const data = snapshot.data();
		setUserData(data);
	
	}

	const handleUpdate = async() => {

	}
  
  return (
	<View>
	<Text>EDit</Text>

	</View>

  )
  }

export default EditProfile;