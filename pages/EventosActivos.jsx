import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, SectionList, StatusBar, Button, TouchableOpacity, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/core";

export function EventosActivos() {
    const [showEntretenimiento, setShowEntretenimiento] = useState();
    const [showGastronomia, setShowGastronomia] = useState();
    const [showMuseos, setShowMuseos] = useState();
    const [showCategorias, setShowCategorias] = useState(true);
    const navigation = useNavigation();
    const [puntos, setPuntos] = useState([]);

    const EVENTOS = [
        {
            title: 'Eventos activos',
            data: ['Entretenimiento', "Gastronomia", "Museos"]
        }
    ]
    const entretenimiento = ['BirraFest'
    ]
    const gastronomia = [
        'Ruta del Vino',

    ]
    const museos = [
        'Museos historicos'
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
    function goToRutaDelVino(opciones) {
        showPuntosTuristicos(opciones);
        navigation.navigate('Ruta Del Vino');

    }
    function goToMuseos(opciones) {
        showPuntosTuristicos(opciones);
        navigation.navigate('Museos');

    }
    function goToBirraFest(opciones) {
        showPuntosTuristicos(opciones);
        navigation.navigate('BirraFest');

    }

    function backCategorias() {
        setShowCategorias(!showCategorias)
        setShowEntretenimiento(false)
        setShowGastronomia(false)
        setShowMuseos(false)
    }

    return (

        <SafeAreaView style={styles.container}>

            {showCategorias && (<SectionList
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

            )
            }
            
               {showMuseos && (
                <View style={styles.opciones}>
                    <Text style={styles.title}>Museos</Text>
                    {
                        museos.map(opciones => (
                            <View key={opciones} style={styles.puntos}>
                                <Text style={styles.puntosName}>{opciones}</Text>
                                <Button
                                    color={'grey'}
                                    title={'Ver recorrido'}
                                    onPress={() => goToMuseos(opciones)}
                                >
                                </Button>
                            </View>
                        ))}
                </View>

            )}
              {showEntretenimiento && (
                <View style={styles.opciones}>
                    <Text style={styles.title}>Museos</Text>
                    {
                        entretenimiento.map(opciones => (
                            <View key={opciones} style={styles.puntos}>
                                <Text style={styles.puntosName}>{opciones}</Text>
                                <Button
                                    color={'green'}
                                    title={'Ver recorrido'}
                                    onPress={() => goToBirraFest(opciones)}
                                >
                                </Button>
                            </View>
                        ))}
                </View>

            )}
            {showGastronomia && (
                <View style={styles.opciones}>
                    <Text style={styles.title}>Gastronomia</Text>
                    {
                        gastronomia.map(opciones => (
                            <View key={opciones} style={styles.puntos}>
                                <Text style={styles.puntosName}>{opciones}</Text>
                                <Button
                                    color={'#722F37'}
                                    title={'Ver recorrido'}
                                    onPress={() => goToRutaDelVino(opciones)}
                                >
                                </Button>
                            </View>
                        ))}
                </View>

            )}

            <View style={styles.button}>
                <Button title="Back to Categorias" onPress={() => backCategorias()}></Button>
            </View>
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
        fontSize: 16,
        margin: 10
    },
    button: {
        margin: 15
    }
});