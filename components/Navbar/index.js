import { createDrawerNavigator } from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import HouseList from "../HouseList/index";
import HouseItem from "../HouseItem/İndex";

const DrawerNavigator = createDrawerNavigator({
	Home: {
		screen: HouseList,
	},
	Details: {
		screen:HouseItem,
	}

});

export default createAppContainer(DrawerNavigator);