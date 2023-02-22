import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 


export default function ButtonNew({ focused, size}){
    return(
        <View style={[styles.container, { backgroundColor: focused ? '#9400D3' : '#9932CC' }]}>
            <FontAwesome name="dollar" size={size} color={ focused ? '#fff' : '#f8f8f8' } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    }
})