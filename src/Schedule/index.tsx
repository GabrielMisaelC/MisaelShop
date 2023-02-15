import { StyleSheet, SafeAreaView, Text, View, ScrollView} from 'react-native';
import moment from 'moment';
import { useEffect, useState } from 'react';
import build from './build';
import { useNavigation } from "@react-navigation/native";
import TopTitle from '../Components/TopTitle';

export default function Schedule() {

  const [currentYear, setCurrentYear] = useState(2023);

  const [monthEffect, setMonthEffect] = useState<JSX.Element | null>(null);

  const [currentMonth, setCurrentMonth] = useState("July");

  const handleClickPlus = () => {
    setCurrentYear(currentYear + 1);
  }

  const handleClickMenos = () => {
    setCurrentYear(currentYear - 1);
  }

  moment.updateLocale("pt", {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ]
  });

  useEffect(() => {
    setMonthEffect(<MonthCard
      key={currentMonth}
      month={currentMonth}
      currentYear={currentYear}
      /> )
  }, [currentYear])

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <TopTitle color='black' currentYear={currentYear} handleClickMenos={handleClickMenos} handleClickPlus={handleClickPlus}/>
        {monthEffect}
      </SafeAreaView>
    </ScrollView>
  );
}

function MonthCard(props: any){
  const [month, setMonth] = useState(props.month);
  const [value, setValue] = useState(
    moment().locale("pt").month(props.month).year(props.currentYear)
  )
  const [ calendar, setCalendar] = useState([]);
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];


  const handleClickPlus = () => {
    if(month === "January"){
      setMonth("February");
    }else if(month === "February"){
      setMonth("March");
    }else if(month === "March"){
      setMonth("April");
    }else if(month === "April"){
      setMonth("May");
    }else if(month === "May"){
      setMonth("June");
    }else if(month === "June"){
      setMonth("July");
    }else if(month === "July"){
      setMonth("August");
    }else if(month === "August"){
      setMonth("September");
    }else if(month === "September"){
      setMonth("October");
    }else if(month === "October"){
      setMonth("November");
    }else if(month === "November"){
      setMonth("December");
    }else if(month === "December"){
      setMonth("January");
    }
  }

  const handleClickMenos = () => {
    if(month === "January"){
      setMonth("December");
    }else if(month === "February"){
      setMonth("January");
    }else if(month === "March"){
      setMonth("February");
    }else if(month === "April"){
      setMonth("March");
    }else if(month === "May"){
      setMonth("April");
    }else if(month === "June"){
      setMonth("May");
    }else if(month === "July"){
      setMonth("June");
    }else if(month === "August"){
      setMonth("July");
    }else if(month === "September"){
      setMonth("August");
    }else if(month === "October"){
      setMonth("September");
    }else if(month === "November"){
      setMonth("October");
    }else if(month === "December"){
      setMonth("November");
    }
  }

useEffect(()=>{
  setValue(value.year(props.currentYear));
  setValue(value.month(month));
  setCalendar(build(value));
},[value, props.currentYear, month])

  return (
    <View style={styles.month}>
        <TopTitle color='white' currentYear={month} handleClickMenos={handleClickMenos} handleClickPlus={handleClickPlus}/>
        <View style={styles.weekDays}>
          {weekDays.map(value=>(
            <Text style={styles.weekDaysText}>{value}</Text>
          ))}
        </View>
        {calendar.map((week)=>(
        <View style={styles.week}>
          {week.map(day=>(
            <DayCard
              key={day._d.getTime() + props.month}
              day={day}
              month={month}
              year={props.currentYear}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

function DayCard(props: any){
  const [state, setState] = useState("");
  const navigation = useNavigation();
  const day = props.day._d;

  useEffect(() => {
     const currentMonth = new Date(props.month + ",01," + props.year);
     if(day.getMonth() !== currentMonth.getMonth()){
      setState("nonPertenceMonth");
      return;
     }
  }, [])

  const handleClickDate = () => {
      navigation.navigate("CadastroNewService");
  }

  return(
    <View>
      <Text onPress={handleClickDate} style={state === "nonPertenceMonth" ? styles.nonPertenceMonth : state === "" ? styles.days : styles.daysSelectde}>{props.day.format("DD").toString()}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title:{
    color: '#000',
    fontFamily: 'Roboto-Bold',
    fontSize: 35,
    marginTop: 30,
    marginBottom: 30,
  },
  month: {
    width: '80%',
    marginTop: 50,
    backgroundColor: '#191970',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  weekDays: {
    display: 'flex',
    flexDirection: 'row',
  },
  week: {
    width: '80%',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  weekDaysText: {
    fontSize: 22,
    color: '#fff',
    margin: 9,
  },
  days: {
    fontSize: 18,
    color: '#fff',
    margin: 5,
  },
  daysSelectde: {
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#000',
    margin: 5,
    borderRadius: 10,
  },
  nonPertenceMonth: {
    fontSize: 18,
    color: '#808080',
    margin: 5,
    opacity: 0.9,
  },
});
