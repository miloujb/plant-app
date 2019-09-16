import React, { Component } from "react";
import { Text, Dimensions } from "react-native";
import { createStackNavigator, StackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import MyGarden from "./Screens/MyGarden";
import MyPlants from "./Screens/MyPlants";
import LogIn from "./Components/LogIn";
import { View } from "native-base";
import { createDrawerNavigator } from "react-navigation-drawer";

const { width } = Dimensions.get("window");

//Main screens for drawer navigator

// export const MainStack = createStackNavigator(
//   {
//     Garden: {
//       screen: MyGarden,
//       navigationOptions: {
//         title: "My Garden",

//         gesturesEnabled: false
//       }
//     },
//     Plants: {
//       screen: MyPlants,
//       navigationOptions: {
//         title: "My Plants",
//         gesturesEnabled: false
//       }
//     }
//   },
//   { headerMode: "screen" }
// );

// //Drawer Navigator

// export const Drawer = createDrawerNavigator({
//   MainStack: {
//     screen: MainStack
//   }
// });

// export const AppStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         header: null,
//         gesturesEnabled: false
//       }
//     },
//     Drawer: {
//       screen: Drawer,
//       navigationOptions: {
//         header: null,
//         gesturesEnabled: false
//       }
//     }
//   },
//   { headerMode: "none" }
// );

// const App = () => {
//   return (
//     <>
//       <AppStack />;
//     </>
//   );
// };

// export default App;

// const HomeNavigator = createStackNavigator(
//   {
//     Home: HomeScreen
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerStyle: {
//           backgroundColor: "#3a9ad3"
//         },
//         headerTitle: "Home",
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//           textAlign: "center",
//           flex: 1
//         },
//         headerLeft: (
//           <Icon
//             style={{ paddingLeft: 10, color: "white" }}
//             onPress={() => navigation.openDrawer()}
//             name="md-menu"
//             size={30}
//           />
//         )
//       };
//     }
//   }
// );

// const GardenNavigator = createStackNavigator(
//   {
//     Garden: MyGarden
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerStyle: {
//           backgroundColor: "#3a9ad3"
//         },
//         headerTitle: "My Garden",
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//           textAlign: "center",
//           flex: 1
//         },
//         headerLeft: (
//           <Icon
//             style={{ paddingLeft: 10, color: "white" }}
//             onPress={() => navigation.openDrawer()}
//             name="md-menu"
//             size={30}
//           />
//         )
//       };
//     }
//   }
// );

// const PlantsNavigator = createStackNavigator(
//   {
//     Plants: MyPlants
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerStyle: {
//           backgroundColor: "#3a9ad3"
//         },
//         headerTitle: "My Plants",
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//           textAlign: "center",
//           flex: 1
//         },
//         headerLeft: (
//           <Icon
//             style={{ paddingLeft: 10, color: "white" }}
//             onPress={() => navigation.openDrawer()}
//             name="md-menu"
//             size={30}
//           />
//         )
//       };
//     }
//   }
// );

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Garden: MyGarden,
    Plants: MyPlants
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: "rgba(255, 255, 255, 9)",
    overlayColor: "#6b52ae",
    drawerWidth: width * 0.3,
    contentOptions: {
      activeTintColor: "green"
    }
  }
);

// const GardenNavigator = createDrawerNavigator(
//   {
//     Garden: MyGarden
//   },
//   {
//     hideStatusBar: true,
//     drawerBackgroundColor: "rgba(255, 255, 255, 9)",
//     overlayColor: "#6b52ae",
//     drawerWidth: width * 0.1,
//     contentOptions: {
//       activeTintColor: "green"
//     }
//   }
// );

// const PlantsNavigator = createDrawerNavigator(
//   {
//     MyPlants: MyPlants
//   },
//   {
//     hideStatusBar: true,
//     drawerBackgroundColor: "rgba(255, 255, 255, 9)",
//     overlayColor: "#6b52ae",
//     drawerWidth: width * 0.1,
//     contentOptions: {
//       activeTintColor: "green"
//     }
//   }
// );

const AppStackNavigator = createStackNavigator({
  Home: { screen: DrawerNavigator },
  Garden: { screen: DrawerNavigator },
  Plants: { screen: DrawerNavigator }
  // Login: { screen: LogIn }
});

const App = createAppContainer(AppStackNavigator);
export default App;
