import React, { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AntDesign } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 



export default function Login() {



  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



  function btn(){
    navigation.navigate("Master");
    console.log(username);
    console.log(password);
  }
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>

      <LinearGradient 
        style={styles.top}
        start={{x:0,y:1}}
        end={{x:1,y:0}}
        locations={[.2,0.9]}
        colors={['#8B008B', '#A020F0', '#A020F0']}>

       {/* <AntDesign name="windows" size={100} color="white" /> */}
       {/* <Fontisto name="playstation" size={100} color="white" /> */}

      </LinearGradient>

      <View style={styles.divLogin}>
        <Text style={styles.title}>MANEGER</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          onChangeText={onChangeUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={onChangePassword}
          value={password}
        />
        <TouchableOpacity onPress={() => btn()} style={styles.button}>
            <Text style={styles.textButton}>ENTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  divLogin: {
    width: '85%',
    height: '56%',
    display: 'flex',
    marginTop: 110,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  input: {
    width: 250,
    height: 45,
    margin: 12,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    lineHeight: 36,
    fontFamily: 'Roboto-Bold',
    color: '#000',
    letterSpacing: 4,
    marginBottom: 20,
    marginTop: -40,
  },
  textButton: {
    fontSize: 20,
    lineHeight: 20,    
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    letterSpacing: 4,
    fontStyle: 'italic',
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 8,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#8B008B",
    color: '#FFF',
  },
  top: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 350,
    position: 'absolute',
    top: 0,
  }
});
