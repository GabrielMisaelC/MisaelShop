import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AntDesign } from '@expo/vector-icons'; 

import { useNavigation } from "@react-navigation/native";

export default function TopHome() {
  const navigation = useNavigation();


  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function logout(){
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <LinearGradient 
        style={styles.top}
        start={{x:0,y:1}}
        end={{x:1,y:0}}
        locations={[.2,0.9]}
        colors={['#8B008B', '#A020F0', '#A020F0']}>

        <View style={styles.conteinerTopText}>
           <Text style={styles.textTop}>Olá, Gabriel Carvalho</Text>
        </View>
       
        <View style={styles.conteinerTopIcon}>
           <AntDesign name="logout" size={24} color="white"  style={{paddingTop: 45,}} onPress={logout}/>
        </View>
    
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        alignItems: 'center',
    },
    top: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 130,
        position: 'absolute',
        top: -60,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    textTop: {
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        paddingTop: 50,
    },
    conteinerTopText: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    conteinerTopIcon: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
