import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import Dropdown from "../Components/Dropdown";
import OptionButton from "../Components/OptionButton";
import { useNavigation } from "@react-navigation/native";

export default function CadastroNewCLient(){

    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [cellphone, onChangeCellphone] = React.useState('');
    const [cpf, onChangeCpf] = React.useState('');
    const [selectOption, setSelectOption] = useState(undefined);

    const navigation = useNavigation();

    const option = [
        { label: 'Facebook', value: '1' },
        { label: 'Instagram', value: '2' },
        { label: 'Linkedin', value: '3' },
        { label: 'WhatsApp', value: '4' },
        { label: 'Panfleto', value: '5' },
        { label: 'Outro', value: '6' },
      ];

    
    const handleCancel = () => {
        navigation.navigate("Master");
    }
    return(
        <SafeAreaView>
            <LinearGradient 
            style={styles.container}
            start={{x:0,y:1}}
            end={{x:1,y:0}}
            locations={[.5,0.9]}
            colors={['#191970', '#0000CD']}>


            <View style={styles.divTitle}>
               <Text style={styles.title}>CADASTRO</Text>
            </View>

            <View style={styles.form}>
                <ScrollView>


            
                <View>
                    <Dropdown label="Meio de Contato?" data={option} onSelect={setSelectOption} />
                </View>

                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome Completo'
                        onChangeText={onChangeName}
                        value={name}
                        />
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        onChangeText={onChangeEmail}
                        value={email}
                        />
                    <TextInput
                        style={styles.input}
                        placeholder='XXX.XXX.XXX-XX'
                        onChangeText={onChangeCpf}
                        value={cpf}
                        />
                    <TextInput
                        style={styles.input}
                        placeholder='(XX) XXXXX-XXXX'
                        onChangeText={onChangeCellphone}
                        value={cellphone}
                        />
                </View>

                </ScrollView>
            </View>

            <OptionButton handleCancel={handleCancel}/>

            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    divTitle: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        opacity: 0.7,
        position: 'absolute',
        borderRadius: 10,
        top: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#000',
        fontFamily: 'Roboto-Bold',
        fontSize: 30,
    },
    form: {
        width: '90%',
        height: 400,
        backgroundColor: '#fff',
        opacity: 0.7,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
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
        textAlign: 'center',
    }
})