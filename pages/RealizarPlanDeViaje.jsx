import { StyleSheet, Text, View, Platform, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Categorias } from "./Categorias";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator();

export function RealizarPlanDeViaje() {

    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [textInicio, setTextInicio] = useState();

    const navigation = useNavigation();

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
            <Text style={{fontWeight:'bold',fontSize:20, marginBottom:20}}>Nuevo plan de viaje</Text>
           
            <View >
                <Text style={{margin:10}}>Descripcion del plan de viaje </Text>
            <TextInput  style={styles.input} placeholder="Descripcion"></TextInput>
            </View>
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
                <View style={{margin:40}}>
                    <Button title="Fecha de inicio" onPress={showDatePicker}></Button>
                </View>
            )}
            {textInicio &&(
                <Text>Fecha de inicio del plan : {textInicio}</Text>
            )

            }

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
                <View style={{margin:40}}>
                    <Button title="Fecha de fin" onPress={showDatePickerFin}></Button>
                </View>
            )}
            {textFIN && (
                <Text>Fecha de fin del plan : {textFIN}</Text>
            )}
            
            <View  style={{margin:50}}>
            <Button title="Siguiente" onPress={()=>navigation.navigate('Categorias')}></Button>
            </View>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });
  