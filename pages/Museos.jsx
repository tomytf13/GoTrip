import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '../environments';

export function Museos() {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUD_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUD_DELTA * ASPECT_RATIO;


    const MERCEDES_SOSA =
    {
        latitude: -26.827719434982672,
        longitude: -65.1939473481172,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    const MUSEO_PROVINCIAL =
    {
        latitude: -26.8289766,
        longitude: -65.2103665,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    const MUSEO_NICOLASAVELLANEDA =
    {
        latitude: -26.8286303,
        longitude: -65.2120083,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }

    const MUSEO_BELLASARTES =
    {
        latitude: -26.8286303,
        longitude: -65.2120083,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    const MUSEO_MIGUEL_LILLO =
    {
        latitude: -26.83138673265136,
        longitude: -65.22188416909587,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }

    const MUSEO_CASA_PADILLA =
    {
        latitude: -26.830371800898067,
        longitude: -65.20467884657981,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }

    const MUSEO_CASA_HISTORICA =
    {
        latitude: -26.83290499764565,
        longitude: -65.20372378,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }


    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={MUSEO_CASA_HISTORICA}
            >
                <Marker
                    pinColor={'grey'}
                    coordinate={MERCEDES_SOSA}
                    title={"Museo Mercedes sosa"}
                    description={'Museo'}
                ></Marker>
                <MapViewDirections
                    strokeColor='blue'
                    strokeWidth={3}
                    origin={MERCEDES_SOSA}
                    destination={MUSEO_PROVINCIAL}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                <Marker
                    pinColor={'grey'}
                    coordinate={MUSEO_PROVINCIAL}
                    title={"Museo Provincial"}
                    description={'Museo'}
                ></Marker>
                <MapViewDirections
                    strokeColor='blue'
                    strokeWidth={3}
                    origin={MUSEO_PROVINCIAL}
                    destination={MUSEO_CASA_HISTORICA}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                <Marker
                    pinColor={'grey'}
                    coordinate={MUSEO_CASA_HISTORICA}
                    title={"Casa Historica Tucuman"}
                    description={'Museo'}
                ></Marker>
                <MapViewDirections
                    strokeColor='blue'
                    strokeWidth={3}
                    origin={MUSEO_CASA_HISTORICA}
                    destination={MUSEO_NICOLASAVELLANEDA}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                <Marker
                    pinColor={'grey'}
                    coordinate={MUSEO_NICOLASAVELLANEDA}
                    title={"Museo Nicolas Avellaneda"}
                    description={'Museo'}
                ></Marker>
                <MapViewDirections
                    strokeColor='blue'
                    strokeWidth={3}
                    origin={MUSEO_NICOLASAVELLANEDA}
                    destination={MUSEO_BELLASARTES}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                <Marker
                    pinColor={'grey'}
                    coordinate={MUSEO_BELLASARTES}
                    title={"Museo Bellas Artes"}
                    description={'Museo'}
                ></Marker>
                  <MapViewDirections
                    strokeColor='blue'
                    strokeWidth={3}
                    origin={MUSEO_BELLASARTES}
                    destination={MUSEO_CASA_PADILLA}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                  <Marker
                    pinColor={'grey'}
                    coordinate={MUSEO_CASA_PADILLA}
                    title={"Museo Casa Padilla"}
                    description={'Museo'}
                ></Marker>
                   <MapViewDirections
                    strokeColor='blue'
                    strokeWidth={3}
                    origin={MUSEO_CASA_PADILLA}
                    destination={MUSEO_MIGUEL_LILLO}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                   <Marker
                    pinColor={'grey'}
                    coordinate={MUSEO_MIGUEL_LILLO}
                    title={"Museo Miguel Lillo"}
                    description={'Museo'}
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