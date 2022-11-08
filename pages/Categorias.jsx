import React, { useState } from "react";
import { StyleSheet, Text,TextInput, View, SafeAreaView, SectionList, StatusBar,Button } from "react-native";
import { useNavigation } from "@react-navigation/core";


const DATA = [
    {
        title: "Categorias",
        data: ["Entretenimiento", "Gastronomia", "Museos", "Parques y reservas", "Vida Nocturna"]
    },

];

export function Categorias() {

const [searchCategoria, setsearchCategoria] = useState();
const navigation = useNavigation()


    function goToCategories(item){
        console.log(item);
        navigation.navigate('PuntoTuristicoSeleccionado');

    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder={"Buscar por descripcion"}
            onChangeText={(val)=>setsearchCategoria(val)}
            />
            <Text>{searchCategoria}</Text>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) =>
                 <Text 
                 style={styles.item}
                 onPress={()=>goToCategories(item)}
                 >{item}
                 </Text> }
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#5E96C3",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 25,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 15
    },
    input: {
        margin:10,
        marginTop:25,
        padding:8,
        borderWidth:1,
        borderColor: "#777",

    }
});