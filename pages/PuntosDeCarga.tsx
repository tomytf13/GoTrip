import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../environments';
import Constants from 'expo-constants';
import React, { useState, useRef, useEffect } from 'react';
import MapViewDirections from 'react-native-maps-directions';

export function PuntosDeCarga() {

    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUD_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUD_DELTA * ASPECT_RATIO;
    const INITIAL_POSITION = {
        latitude: -26.832766,
        longitude: -65.194684,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };

    return (
        <View style={styles.container}>
            <Text>Puntos De Carga</Text>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={INITIAL_POSITION}
            >
                <Marker
                    pinColor={"purple"} // any color
                    title={"pepito"}
                    description={"juan punto de carga"}
                    coordinate={{ latitude: -26.832766, longitude: -65.194684 }}
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
    }
})