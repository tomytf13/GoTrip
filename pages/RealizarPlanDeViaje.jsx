import { StyleSheet, Text, View, Platform, Button } from "react-native";
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export function RealizarPlanDeViaje() {

    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [textInicio, setTextInicio] = useState();


    const [datePickerFIN, setDatePickerFIN] = useState(false);
    const [dateFIN, setdateFIN] = useState(new Date());
    const [textFIN, setTextFIN] = useState();
 
    function showDatePicker(){
        setDatePicker(true);
    }
    function showDatePickerFin(){
        setDatePickerFIN(true);
    }
    function onDateSelected(event,value){
        setDate(value)
        let tempDate = new Date(value);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setTextInicio(fDate)
        setDatePicker(false);
    }
    function onDateSelectedFin(event,value){
        setdateFIN(value)
        let tempDate = new Date(value);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setTextFIN(fDate)
        setDatePickerFIN(false);
    }

    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:20}}>Nuevo plan de viaje</Text>
            {datePicker && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS==='ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected}
                />
            )}
            {!datePicker && (
                <View style={{margin:10}}>
                    <Button title="Fecha de inicio" onPress={showDatePicker}></Button>
                </View>
            )}
                <Text>Fecha de inicio del plan : {textInicio}</Text>

            {datePickerFIN && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS==='ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelectedFin}
                />
            )}
            {!datePickerFIN && (
                <View style={{margin:10}}>
                    <Button title="Fecha de fin" onPress={showDatePickerFin}></Button>
                </View>
            )}
                <Text>Fecha de fin del plan : {textFIN}</Text>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
  });
  