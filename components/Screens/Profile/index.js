import React, { useState } from "react";
import { View,Text,ScrollView,Image, TouchableOpacity, SafeAreaView,} from "react-native";
import styles from "./styles";

const Profile = () => {
	const[posts,setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
  	const [deleted, setDeleted] = useState(false);
 	const [userData, setUserData] = useState(null);

	return(
		<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
		<ScrollView
		  style={styles.container}
		  contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
		  showsVerticalScrollIndicator={false}>
		  <Image
			style={styles.userImg}
			source={require('../../../assets/images/users/user1.jpeg')}
		  />

		  {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}

		  <View style={styles.userBtnWrapper}>
			{false ? (
			  <>
				<TouchableOpacity style={styles.userBtn} onPress={() => {}}>
				  <Text style={styles.userBtnTxt}>Message</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userBtn} onPress={() => {}}>
				  <Text style={styles.userBtnTxt}>Follow</Text>
				</TouchableOpacity>
			  </>
			) : (
			  <>
				<TouchableOpacity
				  style={styles.userBtn}
				  onPress={() => {
					navigation.navigate('EditProfile');
				  }}>
				  <Text style={styles.userBtnTxt}>Edit</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
				  <Text style={styles.userBtnTxt}>Logout</Text>
				</TouchableOpacity>
			  </>
			)}
		  </View>
  
		  <View style={styles.userInfoWrapper}>
			<View style={styles.userInfoItem}>
			  <Text style={styles.userInfoTitle}>{posts.length}</Text>
			  <Text style={styles.userInfoSubTitle}>Yayında Olanlar</Text>
			</View>
			<View style={styles.userInfoItem}>
			  <Text style={styles.userInfoTitle}>2</Text>
			  <Text style={styles.userInfoSubTitle}>Yayını Bekleyenler</Text>
			</View>
			<View style={styles.userInfoItem}>
			  <Text style={styles.userInfoTitle}>3</Text>
			  <Text style={styles.userInfoSubTitle}>Satış Geçmişi</Text>
			</View>
		  </View>
  
		  {posts.map((item) => (
			<PostCard key={item.id} item={item} onDelete={handleDelete} />
		  ))}
		</ScrollView>
	  </SafeAreaView>
	)

};

export default Profile;