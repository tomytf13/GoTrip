import { StyleSheet, Text, View, Platform, Button } from "react-native";
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
export function RealizarPlanDeViaje() {


    
    const [fechaInicio, setInicio] = useState(new Date());
    const [fechaFin, setFin] = useState(new Date());
    const [show, setShow] = useState(false);
    const [showFin,setShowFin] = useState(false);
    const [mode,setMode] = useState('date');
    const [textInicio,setTextInicio] = useState('');
    const [textFechaFin, setTextFechaFin]= useState();

    const onChange = (event, selectDate )=>
    {
        console.log('onchangeinicio');
        const currentDate = selectDate || date;
        setShow(Platform.OS === 'android');
        setInicio(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Horas' + tempDate.getHours + '/Minutes: ' + tempDate.getMinutes();
        setTextInicio(fDate);
        setShow(false);
        console.log(fDate); 
    }
    
    const onChangeFin = (event, selectDate )=>
    {
        console.log('onchangefin');
        const currentDate = selectDate || date;
        setShow(Platform.OS === 'android');
        setFin(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Horas' + tempDate.getHours + '/Minutes: ' + tempDate.getMinutes();
        setTextFechaFin(fDate);
        showFin(false);
        console.log(fDate); 
    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }
    const showModeFin = (currentMode) => {
        setShowFin(true);
        setMode(currentMode)
    }


    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:20}}>Nuevo plan de viaje</Text>
            <Text style={{fontWeight:'bold',fontSize:20}}>{textInicio}</Text>
            <View style={{margin:20}}>
                <Button title='Fecha de inicio' onPress={()=>showMode('date')}></Button>
            </View>
            {show && (
            <DateTimePicker
            
             testID='dateTimePicker'
             value={fechaInicio}
             mode={mode}
             is24Hour={true}
             display='default'
             onChange={onChange}
             >
            </DateTimePicker>)}

            <Text style={{fontWeight:'bold',fontSize:20}}>{textFechaFin}</Text>
            <View style={{margin:20}}>
                <Button title='Fecha de fin' onPress={()=>showModeFin('date')}></Button>
            </View>
            {showFin && (
            <DateTimePicker
             testID='dateTimePicker'
             value={fechaFin}
             mode={mode}
             is24Hour={true}
             display='default'
             onChange={onChangeFin}
             >
            </DateTimePicker>)}



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    }
  });
  