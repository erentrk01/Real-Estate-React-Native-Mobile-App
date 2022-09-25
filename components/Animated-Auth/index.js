import {KeyboardAvoidingView,Text,View,Dimensions, StyleSheet, TextInput ,Platform} from "react-native";
import { useState,useEffect } from "react";
import Svg,{Image,Ellipse,ClipPath} from "react-native-svg";
import styles from "./styles";""
import StyledButton from "../../common/StyledButton";
import Animated,{useSharedValue,useAnimatedStyle,interpolate,withTiming,withDelay,runOnJS,withSequence,withSpring}from "react-native-reanimated";

import {firebase} from "../../Firebase/firebase";

import { useSelector,useDispatch } from "react-redux";
import { KeepUser } from "../../Store/reducers";

let navigation;


 const AnimatedAuth = (props) => {
	const[initializing,setInitializing] = useState(true);
	const[user,setUser] = useState();
	const usr =  useSelector(state=>state.verified);
	const dispatch = useDispatch();

	const[isSignedIn,setIsSignedIn]=useState(false);
	const[registerEmail,setRegisterEmail] = useState("");
	const[registerPassword,setRegisterPassword] = useState("");
	const[loginEmail,setloginEmail] = useState("");
	const[loginPassword,setloginPassword] = useState("");
	const {height,width} = Dimensions.get('window');

	const[name,setName] = useState("");
	const[username,setUsername] = useState("");

	const [isRegistering,setIsRegistering] = useState(false);
	const [isLoggingIn,setIsLoggingIn] = useState(false);
	const [error,setError] = useState("");

	const signInUser =async(loginEmail,loginPassword)=>{
		try {
			await firebase.auth().signInWithEmailAndPassword(loginEmail,loginPassword);
			dispatch(KeepUser());
		} catch (error) {
			setError("hata");
			alert(error.message);
		}
	}

	const signOutUser =()=>{
		signOut(authentication)
		.then((re)=>{
			setIsSignedIn(false);
			console.log(re);
		})
		.catch((err)=>{
			setError("hata");
			console.log(err);
		})
	}

	const login = () => {
		isRegistering ? register(registerEmail,registerPassword) : signInUser(loginEmail,loginPassword);
		formBtnScale.value = withSequence(withSpring(1.1),withSpring(1.3),withSpring(1));
		if(! firebase.auth().currentUser) return;
		
		firebase.auth().currentUser.reload();
		dispatch(KeepUser());
		if(error !=="hata" && user ){
			props.navigation.navigate('HouseList')};
	

	if(error==="hata"){
		setError("");
	}

	}


	// animation settings
	const formBtnScale = useSharedValue(1);
	const imagePosition = useSharedValue(1);
	const imageAnimatedStyle = useAnimatedStyle(() => {
		const interpolation = interpolate(imagePosition.value,[0,1],[-height/2,0]);
		return {
			transform:[
				{translateY:withTiming(interpolation,{duration:1000})}
			]
		}
	});

	const buttonAnimatedStyle = useAnimatedStyle(() => {
		const interpolation = interpolate(imagePosition.value,[0,1],[250,1]);
		return {
			opacity:withTiming(imagePosition.value,{duration:500}),
			transform:[
				{translateY:withTiming(interpolation,{duration:1000})}
			]
		}
	});

	const closeBtnContainerStyle = useAnimatedStyle(() => {
		const interpolation = interpolate(imagePosition.value,[0,1],[180,360]);
		return {
			opacity:withTiming(imagePosition.value === 1 ? 0 :1,{duration:800}),
			transform:[{rotate:withTiming(interpolation +'deg',{duration:1000})}]
		}
	});

	const formAnimatedStyle = useAnimatedStyle(() => {
		const interpolation = interpolate(imagePosition.value,[0,1],[0,1]);
		return {
			opacity: imagePosition.value === 0 ? withDelay(400,withTiming(1,{duration:800})) : withTiming(0,{duration:300}),
			transform:[
				{translateY:withTiming(interpolation,{duration:1000})}
			]
		}
	});

	const formBtnAnimatedStyle = useAnimatedStyle(() => {
		return{
			transform:[{scale:formBtnScale.value}]
		}
	});

		//Form handlers

	const loginHandler = () => {
		imagePosition.value = 0;
		if(isRegistering){
			runOnJS(setIsRegistering)(false);
		}
	};

	const registerHandler = () => {
		imagePosition.value = 0;
		if(!isRegistering){
			runOnJS(setIsRegistering)(true);
		}


	};
	const logOutHandler = () => {
		firebase.auth().signOut();	
		//imagePosition.value = 0;
		if(!isRegistering){
			runOnJS(setIsRegistering)(false);
		}
		if(isLoggingIn){
			runOnJS(setIsLoggingIn)(false);
		}


	};
	

	const register = async(email,passw)=>{

	
			firebase.auth().createUserWithEmailAndPassword(email,passw)
			.then((re)=>{
				firebase.auth().currentUser.sendEmailVerification({
					handleCodeInApp:true,
					url:"https://realestate-a31db.firebaseapp.com"
				})
				.then(()=>{
					alert('Verification email sent');
				})
				.catch((err)=>{
					alert(err.message);
				})
				.then(()=>{
					console.log(registerEmail);
					console.log(name);
					firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).set({registerEmail,name})
				})
				.catch((err)=>{
					alert(err.message);
				})
			})
			.catch((err)=>{
				alert(err.message);
			})




	}

	useEffect(() => {
		if(!firebase.auth().currentUser) return;
		if(!firebase.auth().currentUser.uid) return;
	
	
		const val =firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid);

		if(!val) return;

		val.get().then((snapshot)=>{
			if(snapshot.exists) setUsername(snapshot.data().name);
			else console.log('no data');

		})
		.catch(
			(err)=>{
			console.log(err);
			})
	},[])


	
	return(
//<StyledButton onPress={()=>navigation.navigate('AnimatedAuth')} type="primary" content={"Giriş Yap"} />
		<View style={styles.container}>
			<Animated.View style={[StyleSheet.absoluteFill,imageAnimatedStyle]}>
			<Svg width={width} height={height +100}  style={styles.svg}>
				<ClipPath id="clip">
					<Ellipse  cx={width/2} rx={width} ry={height  +100} />
				</ClipPath>
				<Image 
				style={styles.image}
				href={require("../../assets/images/login-background.jpg")} 
				width={width +100}
				height={height +100}
				preserveAspectRatio="xMidYMid slice"
				clipPath="url(#clip)"
				></Image>
				
			</Svg>
			<Animated.View style={[styles.closeBtnContainer,closeBtnContainerStyle]} >
				<Text onPress={()=>imagePosition.value=1} style={styles.title}>X</Text>
			</Animated.View>
			</Animated.View>

			<View style={styles.bottomContainer}>
				<KeyboardAvoidingView 
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				
				>
				{username === "" ? 
					(
					<>
					<Animated.View style={[styles.button,buttonAnimatedStyle]}>
				<StyledButton  onPress={loginHandler} type="secondary" content={"Giriş Yap"} />

				</Animated.View>
				<Animated.View style={[styles.button,buttonAnimatedStyle]} >

					<StyledButton onPress={registerHandler} type="secondary" content={"Kayıt Ol"} />
				</Animated.View>
					</>
				) : ( 
					<Animated.View style={[styles.button,buttonAnimatedStyle]} >

					<StyledButton onPress={logOutHandler} type="secondary" content={"Log Out"} />
				</Animated.View>
				)
					
				}
				

				<Animated.View style={[styles.formContainer,formAnimatedStyle]}>
					{username !== "" ? <Text>Welcome, {username}</Text>:""}

					{error === "hata" ? <Text style={styles.error}>{error}</Text>:""}
					<TextInput 
					autoFocus 
					required 
					onChangeText={text=> isRegistering ? setRegisterEmail(text) : setloginEmail(text)}
					placeholder="Email" 
					style={styles.textInput} 
					placeholderTextColor={"black"}
					
					/>
					{ isRegistering &&
					<TextInput 
					required
					onChangeText={text=>{setName(text)}}
					style={styles.textInput}
					placeholder="Full Name" 
					placeholderTextColor={"black"}/>}

					<TextInput 
					secureTextEntry={true}
					autoFocus 
					required 
					onChangeText={text=>isRegistering ? setRegisterPassword(text):setloginPassword(text)}
					style={styles.textInput}
					placeholder="Password" 
					placeholderTextColor={"black"}/>
					<Animated.View style={[styles.button,formBtnAnimatedStyle]} >
						<StyledButton onPress={login} type="primary" content={isRegistering ? "Register" : "Log in"} />
					</Animated.View>

				</Animated.View>
				
				</KeyboardAvoidingView>
			</View>

		</View>
	)
};

export default AnimatedAuth;