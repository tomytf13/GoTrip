import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, SectionList, StatusBar, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

export function EventosActivos() {
    const [showEntretenimiento, setShowEntretenimiento] = useState();
    const [showGastronomia, setShowGastronomia] = useState();
    const [showMuseos, setShowMuseos] = useState();
    const [showCategorias, setShowCategorias] = useState(true);

    const EVENTOS = [
        {
            title: 'Eventos activos',
            data: ['Entretenimiento', "Gastronomia", "Museos"]
        }
    ]
     const entretenimiento = ['Sunstar Cinema',
        'Teatro Juan Bautista Alberdi',
        'Teatro Mercedes Sosa',
    ]
    const gastronomia = [
        'Pizza Boom',
        'La Pizzada',
        'Los Electricos',
    ]
    const museos = [
        'Museo Historico Pte. Nicolas Avellaneda',
        'Casa Historica',
        'Museo Casa Padilla'
    ]
    
    function showPuntosTuristicos(item) {
        console.log(item);
        if (item === "Entretenimiento") {
            setShowEntretenimiento(true);
            setShowCategorias(false);
        }
        if (item === "Gastronomia") {
            setShowGastronomia(true);
            setShowCategorias(false);
        }
        if (item === "Museos") {
            setShowMuseos(true);
            setShowCategorias(false);
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={EVENTOS}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) =>
                    <Text
                        style={styles.item}
                        onPress={() => showPuntosTuristicos(item)}
                    >{item}
                    </Text>
                }
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    check: {
        alignSelf: "center"
    },
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
        fontSize: 20,
        alignSelf: "center",
        marginBottom: 25
    },
    input: {
        margin: 10,
        marginTop: 25,
        padding: 8,
        borderWidth: 1,
        borderColor: "#777",

    },
    opciones: {
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: 'blue',
        marginRight: 5
    },
    puntos: {
        flexDirection: 'row',
        marginVertical: 7
    },
    puntosName: {
        textTransform: 'capitalize',
        fontSize: 16
    },
    button: {
        margin: 15
    }
});