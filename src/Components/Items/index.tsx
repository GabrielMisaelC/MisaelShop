import { View, Text, StyleSheet } from "react-native";

export default function Items(){
    return(
        <View style={styles.container}>
            <View style={styles.lotes}>
                <View style={styles.produtos}>

                </View>
                <View style={styles.produtos}>

                </View>
                <View style={styles.produtos}>

                </View>

            </View>
            <View style={styles.lotes}>
                <View style={styles.produtos}>

                </View>
                <View style={styles.produtos}>

                </View>
                <View style={styles.produtos}>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    lotes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    produtos: {
        width: 100,
        height: 100,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#000',
    }
});