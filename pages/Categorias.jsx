import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, SectionList, StatusBar, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";




export function Categorias() {


    const [searchCategoria, setsearchCategoria] = useState();
    const [showEntretenimiento, setShowEntretenimiento] = useState();
    const [showGastronomia, setShowGastronomia] = useState();
    const [showMuseos, setShowMuseos] = useState();
    const [showCategorias, setShowCategorias] = useState(true);
    const navigation = useNavigation()

    const [puntos, setPuntos] = useState([])

    const DATA = [
        {
            title: "Categorias",
            data: ["Entretenimiento", "Gastronomia", "Museos"]
        },

    ];
 

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
    function backCategorias() {
        setShowCategorias(!showCategorias)
        setShowEntretenimiento(false)
        setShowGastronomia(false)
        setShowMuseos(false)
    }

    function pickPuntoTuristico(selectedPunto) {
        console.log(selectedPunto);
        console.log(puntos);
        if (puntos.includes(selectedPunto)) {
            setPuntos(puntos.filter(punto => punto !== selectedPunto))
            return;
        }
        else {
            setPuntos(puntos.concat(selectedPunto))
        }
        console.log(puntos);
    }

    function goToMaps() {
        navigation.navigate('Mapa con markers', { misPuntos: puntos })
    }
    function goToEventosActivos() {
        navigation.navigate('Eventos Activos')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={"Buscar por descripcion"}
                onChangeText={(val) => setsearchCategoria(val)}
            />
            <Button title="Eventos Activos" onPress={()=>goToEventosActivos()}></Button>

            {showCategorias && (
                <SectionList

                    sections={DATA}
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
            )}
       

            {showEntretenimiento && (
                <View style={styles.opciones}>
                    <Text style={styles.title}>Entretenimiento</Text>
                    {
                        entretenimiento.map(opciones => (
                            <View key={opciones} style={styles.puntos}>
                                <TouchableOpacity
                                    style={styles.checkbox}
                                    onPress={() => pickPuntoTuristico(opciones)}
                                >
                                    {puntos.includes(opciones) && (
                                        <Text style={styles.check}>✔</Text>
                                    )
                                    }
                                </TouchableOpacity>
                                <Text style={styles.puntosName}>{opciones}</Text>
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
                                <TouchableOpacity
                                    style={styles.checkbox}
                                    onPress={() => pickPuntoTuristico(opciones)}
                                >
                                    {puntos.includes(opciones) && (
                                        <Text style={styles.check}>✔</Text>
                                    )
                                    }
                                </TouchableOpacity>
                                <Text style={styles.puntosName}>{opciones}</Text>
                            </View>
                        ))}
                </View>

            )}
            {showMuseos && (
                <View style={styles.opciones}>
                    <Text style={styles.title}>Museos</Text>
                    {
                        museos.map(opciones => (
                            <View key={opciones} style={styles.puntos}>
                                <TouchableOpacity
                                    style={styles.checkbox}
                                    onPress={() => pickPuntoTuristico(opciones)}
                                >
                                    {puntos.includes(opciones) && (
                                        <Text style={styles.check}>✔</Text>
                                    )
                                    }
                                </TouchableOpacity>
                                <Text style={styles.puntosName}>{opciones}</Text>
                            </View>
                        ))}
                </View>

            )}



            <View style={styles.button}>
                <Button title="Back to Categorias" onPress={() => backCategorias()}></Button>
            </View>
            {puntos.length !== 0 && (
                <View style={styles.button}>
                    <Button
                        color={"green"}
                        title="Trazar recorrido"
                        onPress={() => goToMaps()}
                    ></Button>
                </View>
            )}


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