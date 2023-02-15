import { SafeAreaView, Text, StyleSheet, View } from "react-native";

export default function BannerPromotion(){
    return(
        <View style={styles.banner}>
             <Text>Banner</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        width: '95%',
        height: 150,
        borderRadius: 10,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
    }
  });