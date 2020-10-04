import React from "react";
import { View, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";

const MenuNavigator = createStackNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: "#512DA8" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    color: "#fff",
  },
};

class Main extends React.Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
        <MenuNavigator.Navigator
          initialRouteName="Menu"
          screenOptions={screenOptions}
        >
          <MenuNavigator.Screen name="Menu" component={Menu}>
          </MenuNavigator.Screen>
          <MenuNavigator.Screen name="DishDetail" component={DishDetail} options={({ route }) => ({ title: route.params.title })}>
          </MenuNavigator.Screen>
        </MenuNavigator.Navigator>
      </View>
    );
  }
}

export default Main;
