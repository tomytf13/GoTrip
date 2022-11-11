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

    const MARKERS_DATA = [
        {
          id: '1',
          latitude: -26.828549098522355,
          longitude: -65.21774896310072,
          color: '#2F3136',
          name: 'Asterix',
          direction: '24 de Septiembre 1.346',
        }, 
        {
          id: '2',
          latitude: -26.82935071857641,
          longitude: -65.21384986397162,
          color: '#2F3136',
          name: 'Kiosko',
          direction: '24 de Septiembre 1.085',
        }, 
        {
          id: '3',
          latitude: -26.831096903554435,
          longitude: -65.20429847594777,
          color: '#2F3136',
          name: 'Kiosko 2',
          direction: '24 de Septiembre 460',
        },
        {
          id: '4',
          latitude: -26.832293383544975,
          longitude: -65.19857507986521,
          color: '#2F3136',
          name: 'Kiosko 3',
          direction: '24 de Septiembre 92',
        },    
        {
          id: '5',
          latitude: -26.829686382432776,
          longitude: -65.20431493137802,
          color: '#2F3136',
          name: 'Kiosko 4',
          direction: '25 de Mayo 101',
        },
        { 
          id: '6',
          latitude: -26.829053406438568,
          longitude: -65.20418216957891,
          color: '#2F3136',
          name: 'Kiosko 5',
          direction: '25 de Mayo 123',
        },
        { 
          id: '7',
          latitude: -26.826747799579067,
          longitude: -65.20362096110433,
          color: '#2F3136',
          name: 'Kiosko 6',
          direction: '25 de Mayo 319',
        },
        { 
          id: '8',
          latitude: -26.823091930645063,
          longitude: -65.20279844158263,
          color: '#2F3136',
          name: 'Kiosko 7',
          direction: '25 de Mayo 585',
        }, 
        { 
          id: '9',
          latitude: -26.818907100767237,
          longitude: -65.20177789317249,
          color: '#2F3136',
          name: 'Kiosko 8',
          direction: '25 de Mayo 891',
        },
        { 
          id: '10',
          latitude: -26.832604581841185,
          longitude: -65.20523203291813,
          color: '#2F3136',
          name: 'Kiosko 9',
          direction: '9 de Julio 134',
        },
        { 
          id: '11',
          latitude: -26.831408386237438,
          longitude: -65.20492234543987,
          color: '#2F3136',
          name: 'Kiosko 10',
          direction: '9 de Julio 45',
        }, 
        { 
          id: '12',
          latitude: -26.84304718382652,
          longitude: -65.20757270651775,
          color: '#2F3136',
          name: 'Kiosko 11',
          direction: '9 de Julio 899',
        },     
        { 
          id: '13',
          latitude: -26.828425234014684,
          longitude: -65.20252853830317,
          color: '#2F3136',
          name: 'Kiosko 12',
          direction: ' Laprida 111',
        }, 
        { 
          id: '14',
          latitude: -26.82708174093975,
          longitude: -65.20218086084475,
          color: '#2F3136',
          name: 'Kiosko 13',
          direction: 'Laprida 213',
        },
        { 
          id: '16',
          latitude: -26.826247176339745,
          longitude: -65.20194994221787,
          color: '#2F3136',
          name: 'Kiosko 15',
          direction: 'Laprida 378',
        },
        { 
          id: '17',
          latitude: -26.830305208251772,
          longitude: -65.19986352497864,
          color: '#2F3136',
          name: 'Kiosko 16',
          direction: 'Monteagudo 112',
        },
        { 
          id: '18',
          latitude: -26.827996818890593,
          longitude: -65.1993085174474,
          color: '#2F3136',
          name: 'Kiosko 17',
          direction: 'Monteagudo 297',
        }, 
        { 
          id: '19',
          latitude: -26.830635241146314,
          longitude: -65.20624143257048,
          color: '#2F3136',
          name: 'Kiosko 18',
          direction: 'Muñecas 13',
        },         
        { 
          id: '20',
          latitude: -26.824979318416446,
          longitude: -65.20462552251675,
          color: '#2F3136',
          name: 'Kiosko 19',
          direction: 'Muñecas 426',
        }
      ];

      return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={INITIAL_POSITION}
            >
                {/* <MapViewDirections
                    origin={pickupCords}
                    destination={droplocationCords}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections>
                 <MapViewDirections
                    origin={droplocationCords}
                    destination={INITIAL_POSITION}
                    apikey={GOOGLE_API_KEY}
                ></MapViewDirections> */}
                {MARKERS_DATA.map((marker) => (
              <Marker
                pinColor={marker.color}
                key={marker.id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.name}
                description={marker.direction}
              ></Marker>
            ))}
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