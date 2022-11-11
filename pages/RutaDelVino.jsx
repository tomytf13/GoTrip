import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '../environments';

export function RutaDelVino() {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUD_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUD_DELTA * ASPECT_RATIO;
    const BODEGA_POSE =
    {
        latitude: -26.5382929,
        longitude: -66.0455292,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    const FINCA_ALBAROSSA =
    {
        latitude: -26.5814306,
        longitude: -66.0178103,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    const CHICO_ZOSSI =
    {
        latitude: -26.3527938,
        longitude: -65.9578526,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    const ARCAS_TOLOMBOM =
    {
        latitude: -26.3045317,
        longitude: -65.9569367,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }

    const CERRO_ELPELAO =
    {
        latitude: -26.8677933,
        longitude: -65.7544436,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }

    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={CHICO_ZOSSI}
            >
                <Marker
                    pinColor={'purple'}
                    coordinate={CERRO_ELPELAO}
                    title={"Cerro el pelao"}
                    description={'Bodega'}
                ></Marker>
                <MapViewDirections
                    strokeColor='#722F37'
                    strokeWidth={3}
                    origin={CERRO_ELPELAO}
                    destination={FINCA_ALBAROSSA}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                <Marker
                    pinColor={'purple'}
                    coordinate={FINCA_ALBAROSSA}
                    title={"Finca Albarossa"}
                    description={'Bodega'}
                ></Marker>
                <MapViewDirections
                     strokeColor='#722F37'
                    strokeWidth={3}
                    origin={FINCA_ALBAROSSA}
                    destination={BODEGA_POSE}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                <Marker
                   pinColor={'purple'}
                    coordinate={BODEGA_POSE}
                    title={"Bodega POSSE"}
                    description={'Bodega'}
                ></Marker>
                  <MapViewDirections
                    strokeColor='#722F37'
                    strokeWidth={3}
                    origin={BODEGA_POSE}
                    destination={CHICO_ZOSSI}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                <Marker
                    pinColor={'purple'}
                    coordinate={CHICO_ZOSSI}
                    title={"Bodega CHICO ZOSSI"}
                    description={'Bodega'}
                ></Marker>
                     <MapViewDirections
                    strokeColor='#722F37'
                    strokeWidth={3}
                    origin={CHICO_ZOSSI}
                    destination={ARCAS_TOLOMBOM}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                    <Marker
                    pinColor={'purple'}
                    coordinate={ARCAS_TOLOMBOM}
                    title={"Bodega Arcas Tolombom"}
                    description={'Bodega'}
                ></Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    searchContainer: {
        position: 'absolute',
        width: '90%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        padding: 8,
        borderRadius: 8,
        top: Constants.statusBarHeight,
    },
    input: {
        borderColor: '#888',
        borderWidth: 1,

    },
    button: {
        backgroundColor: "#bbb",
        paddingVertical: 12,
        marginTop: 16,
        borderRadius: 4,
    },
    buttonText: {
        textAlign: "center",
    }
});