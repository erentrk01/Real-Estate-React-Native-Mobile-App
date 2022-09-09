import { Stylesheet,Text,View,Dimensions, StyleSheet } from "react-native";
import Svg,{Image} from "react-native-svg";
import styles from "./styles";
import StyledButton from "../StyledButton";

let navigation;

 const AnimatedAuth = (props) => {
	const {height,width} = Dimensions.get('window');
	const login = () => props.navigation.navigate('HouseList');
	return(
//<StyledButton onPress={()=>navigation.navigate('AnimatedAuth')} type="primary" content={"Giriş Yap"} />
		<View style={styles.container}>
			<View style={StyleSheet.absoluteFill}>
			<Svg width={width} height={height}  style={styles.svg}>
				<Image 
				style={styles.image}
				href={require("../../assets/images/login.jpeg")} 
				width={width}
				height={height}
				preserveAspectRatio="xMidYMid slice"
				></Image>
				
			</Svg>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.button}>
				<StyledButton  onPress={login} type="secondary" content={"Giriş Yap"} />

				</View>
				<View style={styles.button} >

					<StyledButton onPress={login} type="secondary" content={"Kayıt Ol"} />
				</View>
			</View>
		</View>
	)
};

export default AnimatedAuth;