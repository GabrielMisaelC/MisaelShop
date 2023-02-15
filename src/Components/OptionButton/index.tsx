import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Button {
    handleCancel?: any;
    handleSalve?: any;
}
export default function OptionButton(prop: Button){
    return(
        <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonRed} onPress={() => prop.handleCancel()}>
                    <Text style={styles.textButton}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
                <View style={{width: '10%'}}>

                </View>
                <TouchableOpacity style={styles.buttonGreen} onPress={() => prop.handleSalve()}>
                    <Text style={styles.textButton}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View>

    );
}

const styles = StyleSheet.create({
    buttons: {
        width: '90%',
        height: 100,
        backgroundColor: '#fff',
        opacity: 0.7,
        position: 'absolute',
        borderRadius: 10,
        bottom: 70,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonGreen: {
        width: '40%',
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "green",
        color: '#FFF',
    },
    buttonRed: {
        width: '40%',
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        color: '#FFF',
    },
    textButton: {
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
    },
})