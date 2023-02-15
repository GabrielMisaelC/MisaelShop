import { StyleSheet, Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { color } from 'react-native-elements/dist/helpers';



interface TopTitle {
    handleClickMenos: any;
    currentYear: any;
    handleClickPlus: any;
    color: string;
}

export default function TopTitle(prop: TopTitle){
    return(
        <View style={styles.topYear}>
        <View style={styles.divTopMenos}>
          <AntDesign name="minuscircle" size={35} color={prop.color} onPress={prop.handleClickMenos}/>
        </View>
        <View style={styles.divTopCenter}>
          <Text style={{color: prop.color, fontFamily: 'Roboto-Bold', fontSize: 35, marginTop: 30, marginBottom: 30}}>{prop.currentYear}</Text>
        </View>    
        <View style={styles.divTopPlus}>
          <AntDesign name="pluscircle" size={35} color={prop.color} onPress={prop.handleClickPlus}/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    topYear: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divTopMenos: {
      width: '15%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    divTopCenter: {
      width: '60%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    divTopPlus: {
      width: '15%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
    }
  });
  