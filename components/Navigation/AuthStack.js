import React from "react";
import { View, Text} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
i
import AnimatedAuth from "../Animated-Auth/index";
import AppStack from "./AppStack";
import CategoryStack from "./CategoryStack";

const Stack = createNativeStackNavigator();

const AuthStack = ({user}) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="AnimatedAuth" component={AnimatedAuth} options={{headerShown: false}} />
		</Stack.Navigator>
	)
}
s
export default AuthStack;