import { Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import MyGarden from "./Screens/MyGarden";
import MyPlants from "./Screens/MyPlants";
import LogOut from "./Screens/LogOut";

import { createDrawerNavigator } from "react-navigation-drawer";

const { width } = Dimensions.get("window");

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  Garden: MyGarden,
  Plants: MyPlants,
  Logout: LogOut
});

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: StackNavigator },
    Garden: { screen: StackNavigator },
    Plants: { screen: StackNavigator },
    Logout: { screen: StackNavigator }
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: "rgba(52, 151, 36, 0.1)",
    drawerWidth: width * 0.5,
    contentOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "transparent",
      labelStyle: {
        borderColor: "white",
        color: "white",
        fontSize: 20,
        textAlign: "center"
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

const App = createAppContainer(AppDrawerNavigator);
export default App;
