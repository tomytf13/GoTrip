import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../environments';
import Constants from 'expo-constants';
import React, { useState, useRef, useEffect } from 'react';
import MapViewDirections from 'react-native-maps-directions';

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



export default function MapWithPuntos({route}) {

    const [state, setState] = useState({
        pickupCords:{
            latitude: -26.832766,
            longitude: -65.194684,
            latitudeDelta: LATITUD_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
        droplocationCords:{
            latitude: -26.8310045,
            longitude:-65.2153067,
            latitudeDelta: LATITUD_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        }
    
    });


  const {pickupCords,droplocationCords} = state

  const INITIAL_POSITION = {
    latitude: -26.832766,
    longitude: -65.194684,
    latitudeDelta: LATITUD_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  let arrayPuntos = [];
  arrayPuntos= route.params;

   let newUbicaciones = [];
 useEffect(() => {
    console.log(arrayPuntos);
    
    if(arrayPuntos)
    {
      arrayPuntos.misPuntos.map(function(currentelement, index, arrayobj) {
        console.log(currentelement);
        if(UBICACIONES.includes.call(currentelement))
        {
            newUbicaciones.push(currentelement)
            
            
        }
      });  
      console.log(newUbicaciones, 'NEW UBICACIONES');
    }
 }, [arrayPuntos]);
  
  const SUNSTAR = {
    latitude: -26.8219865,
    longitude: 65.2695815,
    latitudeDelta: LATITUD_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const UBICACIONES = 
  [
    {
      title:'Sunstar Cinema',
      latitude: -26.8219865,
      longitude:-65.2695815,
      latitudeDelta: LATITUD_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    {
      title:'Teatro Juan Bautista Alberdi',
      latitude: -26.8310045,
      longitude:-65.2153067,
      latitudeDelta: LATITUD_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    {
      title:"Teatro Mercedes Sosa",
      latitude: -26.8296432,
      longitude:-65.2063525,
      latitudeDelta: LATITUD_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  ]

  return (
    <View style={styles.container}>
        <MapView
            style={StyleSheet.absoluteFill}
            initialRegion={pickupCords}
        >
            <MapViewDirections
                origin={pickupCords}
                destination={droplocationCords}
                apikey={GOOGLE_API_KEY}
            ></MapViewDirections>
             <MapViewDirections
                origin={droplocationCords}
                destination={INITIAL_POSITION}
                apikey={GOOGLE_API_KEY}
            ></MapViewDirections>
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
  button:{
    backgroundColor: "#bbb",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
  }
});