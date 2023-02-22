import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View,ScrollView, TouchableOpacity} from 'react-native';
import Top from './Components/Top';

export default function Notifications() {
  

  const [currentMonth, setCurrentMonth] = useState("July");

  const [currentYear, setCurrentYear] = useState(1);
  
  const handleClickPlus = () => {
    setCurrentYear(currentYear + 1);
  }

  const handleClickMenos = () => {
    setCurrentYear(currentYear - 1);
  }

  const handleClickPlusMonth = () => {
    if(currentMonth === "January"){
      setCurrentMonth("February");
    }else if(currentMonth === "February"){
      setCurrentMonth("March");
    }else if(currentMonth === "March"){
      setCurrentMonth("April");
    }else if(currentMonth === "April"){
      setCurrentMonth("May");
    }else if(currentMonth === "May"){
      setCurrentMonth("June");
    }else if(currentMonth === "June"){
      setCurrentMonth("July");
    }else if(currentMonth === "July"){
      setCurrentMonth("August");
    }else if(currentMonth === "August"){
      setCurrentMonth("September");
    }else if(currentMonth === "September"){
      setCurrentMonth("October");
    }else if(currentMonth === "October"){
      setCurrentMonth("November");
    }else if(currentMonth === "November"){
      setCurrentMonth("December");
    }else if(currentMonth === "December"){
      setCurrentMonth("January");
    }
  }

  const handleClickMenosMonth = () => {
    if(currentMonth === "January"){
      setCurrentMonth("December");
    }else if(currentMonth === "February"){
      setCurrentMonth("January");
    }else if(currentMonth === "March"){
      setCurrentMonth("February");
    }else if(currentMonth === "April"){
      setCurrentMonth("March");
    }else if(currentMonth === "May"){
      setCurrentMonth("April");
    }else if(currentMonth === "June"){
      setCurrentMonth("May");
    }else if(currentMonth === "July"){
      setCurrentMonth("June");
    }else if(currentMonth === "August"){
      setCurrentMonth("July");
    }else if(currentMonth === "September"){
      setCurrentMonth("August");
    }else if(currentMonth === "October"){
      setCurrentMonth("September");
    }else if(currentMonth === "November"){
      setCurrentMonth("October");
    }else if(currentMonth === "December"){
      setCurrentMonth("November");
    }
  }


  function service(){
    console.log("clicou");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Top color='black' currentYear={currentMonth} handleClickMenos={handleClickMenosMonth} handleClickPlus={handleClickPlusMonth}/>
      <Top color='black' currentYear={currentYear} handleClickMenos={handleClickMenos} handleClickPlus={handleClickPlus}/>
       

      <ScrollView>
        <View style={styles.listNotifications}>
          <TouchableOpacity style={styles.notification} onPress={() => service()}>
            <View>
              <Text style={styles.textNotification}>Horario : 12:00</Text>
              <Text style={styles.textNotification}>Cliente : Beatriz Afonço Pacheco</Text>
              <Text style={styles.textNotification}>Procedimento : Alongamento de Unha</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  listNotifications: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notification: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    height: 95,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  textNotification: {
    marginLeft: 20,
    marginTop: 10,
    color: '#fff',
  }
});
