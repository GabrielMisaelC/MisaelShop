import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Master from "./Master";
import CadastroNewCLient from "./CadastroNewClient";
import CadastroNewService from "./CadastroNewService";

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
        <AppStack.Screen name="CadastroNewService" component={CadastroNewService} />
        <AppStack.Screen name="CadastroNewClient" component={CadastroNewCLient} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}