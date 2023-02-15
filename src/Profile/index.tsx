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

        <View style={styles.containerForm}>
          <View style={styles.div}>
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
          </View>
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
    backgroundColor: '#191970',
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
  containerForm: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    width: '80%',
    height: '80%',
    backgroundColor: '#191970',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divForm: {
    marginTop: 20,
    borderRadius: 10,
    width: '85%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',  
    backgroundColor: '#6fdfff',
  },
  input: {
    width: 250,
    height: 45,
    margin: 12,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    color: '#000',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
});
