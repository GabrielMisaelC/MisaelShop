import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import NewService from "./NewService";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Schedule from "./Schedule";
import {Entypo, Feather, MaterialIcons} from "@expo/vector-icons";
import ButtonNew from "./Components/ButtonNew";
import { LinearGradient } from "expo-linear-gradient";


const Tab = createBottomTabNavigator();

export default function RoutesTab() {
  return (
      <Tab.Navigator screenOptions={{ 
         tabBarStyle: {
          height: 100,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderRadius: 10,
          borderTopColor: '#000',
          borderColor: '#000',
          marginBottom: -5,
          marginTop: 2,
        },
         tabBarInactiveTintColor: '#C0C0C0',
         tabBarActiveTintColor: '#8B008B',
         title: '',
         headerShown: false,
         }}>


        <Tab.Screen 
        name="Inicio" 
        component={Home} 
        options={{
          tabBarIcon: ({ size, color}) => (
            <Entypo name="home" size={size} color={color}/>
          )
        }}/>

        <Tab.Screen 
        name="Procurar" 
        component={Schedule} 
        options={{
          tabBarIcon: ({ size, color}) => (
            <MaterialIcons name="date-range" size={size} color={color}/>
          )
        }}
        />

        <Tab.Screen 
        name="NewService" 
        component={NewService} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size}) => (
            <ButtonNew size={size} focused={focused}/>
          )
        }}/>


        <Tab.Screen 
        name="Notificaçoes" 
        component={Notifications} 
        options={{
          tabBarIcon: ({ size, color}) => (
            <Entypo name="notification" size={size} color={color}/>
          )
        }}/>

        <Tab.Screen 
        name="Perfil" 
        component={Profile} 
        options={{
          tabBarIcon: ({ size, color}) => (
            <Feather name="user" size={size} color={color}/>
          )
        }}/>

      </Tab.Navigator>
  );
}