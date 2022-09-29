import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'


const EditProfile= () => {
	const [image, setImage] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [transferred, setTransferred] = useState(0);
	const [userData, setUserData] = useState(null);

	const getUser = async () => {

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