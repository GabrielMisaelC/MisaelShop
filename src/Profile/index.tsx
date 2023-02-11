import React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput} from 'react-native';

export default function Profile() {

  const [name, onChangeName] = React.useState('Gabriel Carvalho Misael');
  const [email, onChangeEmail] = React.useState('misael_xv@icloud.com');
  const [cargo, onChangeCargo] = React.useState('Desenvolvedor React');
  const [birth, onChangeBirth] = React.useState('08/11/2001');


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.divPerson}>
          <View style={styles.divPicPerson}>

          </View>
        </View>
        <View style={styles.divForm}>
          <TextInput
            style={styles.input}
            placeholder='Name'
            editable={false}
            onChangeText={onChangeName}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            editable={false}
            onChangeText={onChangeEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder='Cargo'
            editable={false}
            onChangeText={onChangeCargo}
            value={cargo}
          />
          <TextInput
            style={styles.input}
            placeholder='Birth'
            editable={false}
            onChangeText={onChangeBirth}
            value={birth}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  divPerson: {
    width: '100%',
    height: 150,
    backgroundColor: '#DEBBD0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divPicPerson: {
    width: '50%',
    height: 190,
    marginTop: 100,
    borderRadius: 100,
    backgroundColor: '#000',
  },
  divForm: {
    marginTop: 80,
    width: '100%',
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 45,
    margin: 12,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});
