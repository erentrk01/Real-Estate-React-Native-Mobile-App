import { Stylesheet,Text,View,Dimensions, StyleSheet, TextInput } from "react-native";
import Svg,{Image,Ellipse,ClipPath} from "react-native-svg";
import styles from "./styles";
import StyledButton from "../StyledButton";
import Animated,{useSharedValue,useAnimatedStyle,interpolate,withTiming}from "react-native-reanimated";

let navigation;


 const AnimatedAuth = (props) => {
	const {height,width} = Dimensions.get('window');
	const login = () => props.navigation.navigate('HouseList');

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
			opacity:withTiming(imagePosition.value  ? 1 :1,{duration:800}),
			transform:[{rotate:withTiming(interpolation +'deg',{duration:1000})}]
		}
	});
	const loginHandler = () => {
		imagePosition.value = 0;

	};

	const registerHandler = () => {
		imagePosition.value = 0;

	};


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
				<Animated.View style={[styles.button,buttonAnimatedStyle]}>
				<StyledButton  onPress={loginHandler} type="secondary" content={"Giriş Yap"} />

				</Animated.View>
				<Animated.View style={[styles.button,buttonAnimatedStyle]} >

					<StyledButton onPress={registerHandler} type="secondary" content={"Kayıt Ol"} />
				</Animated.View>
			{/*	<View style={styles.formContainer}>
					<TextInput 
					placeholder="Email" 
					style={styles.textInput} 
					placeholderTextColor={"black"}/>

					<TextInput 
					style={styles.textInput}
					placeholder="Full Name" 
					placeholderTextColor={"black"}/>

					<TextInput 
					style={styles.textInput}
					placeholder="Password" 
					placeholderTextColor={"black"}/>
					<View style={styles.button} >
						<StyledButton onPress={login} type="primary" content={"Kayıt Ol"} />
					</View>
				</View>*/}
			</View>
		</View>
	)
};

export default AnimatedAuth;