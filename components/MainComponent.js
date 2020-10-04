import React from "react";
import { View, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";

const Drawer = createDrawerNavigator();
const HomeNavigator = createStackNavigator();
const MenuNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();
const ContactNavigator = createStackNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: "#512DA8" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    color: "#fff",
  },
};

function ContactPage() {
  return (
    <ContactNavigator.Navigator
      initialRouteName="Contact Us"
      screenOptions={screenOptions}
    >
      <ContactNavigator.Screen name="Contact Us" component={Contact} />
    </ContactNavigator.Navigator>
  );
}

function AboutPage() {
  return (
    <AboutNavigator.Navigator
      initialRouteName="About Us"
      screenOptions={screenOptions}
    >
      <AboutNavigator.Screen name="About Us" component={About} />
    </AboutNavigator.Navigator>
  );
}

function HomePage() {
  return (
    <HomeNavigator.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <HomeNavigator.Screen name="Home" component={Home} />
    </HomeNavigator.Navigator>
  );
}

function MenuPage() {
  return (
    <MenuNavigator.Navigator
    initialRouteName="Menu"
    screenOptions={screenOptions}
  >
    <MenuNavigator.Screen
      name="Menu"
      component={Menu}
    ></MenuNavigator.Screen>
    <MenuNavigator.Screen
      name="DishDetail"
      component={DishDetail}
      options={({ route }) => ({ title: route.params.title })}
    ></MenuNavigator.Screen>
  </MenuNavigator.Navigator>
  );
}

class Main extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <Drawer.Navigator drawerStyle={{backgroundColor:"#D1C4E9"}} drawerContentOptions={{labelStyle:{fontWeight:"bold"}}}>
          <Drawer.Screen name="Home" component={HomePage} options={{drawerLabel:"Home", title:"Home"}}/>
          <Drawer.Screen name="About Us" component={AboutPage} options={{drawerLabel:"About Us", title:"About Us"}}/>
          <Drawer.Screen name="Menu" component={MenuPage} options={{drawerLabel:"Menu", title:"Menu"}}/>
          <Drawer.Screen name="Contact Us" component={ContactPage} options={{drawerLabel:"Contact Us", title:"Contact Us"}}/>
        </Drawer.Navigator>
      </View>
    );
  }
}

export default Main;
