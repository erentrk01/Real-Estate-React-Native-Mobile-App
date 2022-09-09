import { Stylesheet,Text,View,Dimensions,Image, StyleSheet } from "react-native";
import Svg from "react-native-svg";
import styles from "../Header/styles";
import StyledButton from "../StyledButton";

let navigation;

 const AnimatedAuth = (props) => {
	const {height,width} = Dimensions.get('window');
	const login = () => props.navigation.navigate('HouseList');
	return(
//<StyledButton onPress={()=>navigation.navigate('AnimatedAuth')} type="primary" content={"Giriş Yap"} />
		<View style={styles.container}>
			<View style={StyleSheet.absoluteFill}>
			<Svg width={width} height={height} viewBox="0 0 500 500" style={styles.svg}>
				<Image 
				style={styles.image}
				source={require("../../assets/images/login.jpeg")} 
				width={width}
				height={height}
				></Image>
			</Svg>
			<View style={styles.bottomContainer}>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Giriş Yap</Text>

				</View>
				<View style={styles.button} >

					<StyledButton style={styles.btn} onPress={login} type="secondary" content={"Kayıt Ol"} />
				</View>
			</View>
			</View>
		</View>
	)
};

export default AnimatedAuth;