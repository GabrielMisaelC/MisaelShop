import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Master from "./Master";
import Home from "./Home";
import NewService from "./NewService";
import Perfil from "./Profile";


const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }}>
        <AppStack.Screen 
        name="Login" 
        component={Login} 
        />
        <AppStack.Screen name="Master" component={Master} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}