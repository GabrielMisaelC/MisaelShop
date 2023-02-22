import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Dropdown from "../Components/Dropdown";
import React from "react";
import DatePicker from 'react-native-datepicker';
import { LinearGradient } from 'expo-linear-gradient';
import OptionButton from "../Components/OptionButton";
import { FakeCurrencyInput } from 'react-native-currency-input';


export default function CadastroNewService(){



    
    const [selectedService, setSelectedService] = useState([]);
    const [selectedUser, setSelectedUser] = useState(undefined);
    const [client, setClient] = useState(false);
    const [obs, onChangeObs] = React.useState('');
    const [price, onChangePrice] = React.useState(0.0);
    const [time, setTime] = useState((new Date()));

    const [arrayService, setArrayService] = useState([]);


    const navigation = useNavigation();

    const handleSalve = () => {
        console.log(selectedService);
        console.log(selectedUser);
        console.log(obs);
        console.log(price);
        console.log(time);
    }

    const handleCancel = () => {
        navigation.navigate("Master");
    }

    const handleNewClient = () => {
        navigation.navigate("CadastroNewClient");
    }

    const service = [
        { label: 'Cilios', value: '1' },
        { label: 'Limpeza de Pele', value: '2' },
        { label: 'Brown Lamination', value: '3' },
        { label: 'Design', value: '4' },
        { label: 'Fibra de Vidro', value: '5' },
      ];

    const user = [
        { label: 'Gabriel Carvalho Misael', value: '1'},
        { label: 'Beatriz Afonço Pacheco', value: '2'},
        { label: 'Andressa Afonço', value: '3'},
    ];


    const dropdownStart =  <Dropdown label="Selecione o Serviço" data={service} onSelect={(value) =>  setSelectedService([... selectedService, value])} />
        
    const [dropdown, setDropdown] = useState([dropdownStart]);


    const handleClicAddService = () => {
        console.log('clic');
        
        const newDropdown =  <Dropdown label="Selecione o Serviço" data={service}  onSelect={(value) =>  setSelectedService([... selectedService, value])} />;
        
        setDropdown([...dropdown, newDropdown]);
    }


    return(
        <SafeAreaView style={{backgroundColor: '#000'}}>
            
            <LinearGradient 
            style={styles.container}
            start={{x:0,y:1}}
            end={{x:1,y:0}}
            locations={[.5,0.6]}
            colors={['#A020F0', '#A020F0', '#8B008B']}>

            <View style={styles.divTitle}>
                <Text style={styles.title}>AGENDAMENTO</Text>
            </View>

            <View style={styles.form}>
                
                <ScrollView
                        overScrollMode='never'
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        centerContent={true}>


                {!client ? 
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10}}>
                        <TouchableOpacity onPress={() => handleNewClient()} style={styles.buttonClient}>
                            <Text style={styles.textButtonNew}>
                                Novo Cliente
                            </Text>
                        </TouchableOpacity>
                        <View style={{width: '5%'}}></View>
                        <TouchableOpacity onPress={() => setClient(true)} style={styles.buttonClient}>
                            <Text style={styles.textButtonNew}>
                                Selecionar
                            </Text>
                        </TouchableOpacity>
                    </View>
                :
                    <View>
                        <Dropdown label="Selecione o Cliente" data={user} onSelect={setSelectedUser} />
                    </View>
                }

                {dropdown}

                {/* <View>
                    <Dropdown label="Selecione o Serviço" data={service} onSelect={setSelectedService} />
                </View> */}

                <View style={{display: 'flex', alignItems: 'center' ,alignContent: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10}}>
                    <TouchableOpacity onPress={() => handleClicAddService()}>
                        <Text style={styles.textButtonNew}>+ Add Serviço</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    
                    <DatePicker
                        style={styles.input}
                        date={time} 
                        mode="time" 
                        placeholder="Selecione a Hora"
                        is24Hour={true}
                        confirmBtnText="Confirmar"
                        cancelBtnText="Cancelar"
                        customStyles={{
                            dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                            },
                            dateInput: {
                            borderWidth: 0,
                            marginLeft: 36,
                            borderRadius: 10,
                            },
                        }}
                        onDateChange={(date) => {
                            setTime(date);
                        }}
                        />
                    <TextInput
                        multiline={true}
                        style={styles.inputObs}
                        placeholder='Observação'
                        onChangeText={onChangeObs}
                        value={obs}
                        />
                    <FakeCurrencyInput
                        style={styles.input}
                        value={price}
                        onChangeValue={onChangePrice}
                        prefix="$"
                        delimiter=","
                        separator="."
                        precision={2}
                        onChangeText={(formattedValue) => {
                          // ...
                        }}
                        />
                </View>

                </ScrollView>
            </View>

            <OptionButton handleCancel={handleCancel} handleSalve={handleSalve}/>

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
    form: {
        width: '90%',
        height: 400,
        backgroundColor: '#fff',
        opacity: 0.7,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        color: '#000',
        fontFamily: 'Roboto-Bold',
        fontSize: 30,
    },
    buttonClient: {
        width: '40%',
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
    },
    textButtonNew: {
        color: '#000',
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
    },
    inputObs: {
        width: 250,
        height: 100,
        margin: 12,
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
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