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

type InputAutocompleteProps = {
  label: string;
  placeholder?: string;
  onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

function InputAutocomplete({
  label,
  placeholder,
  onPlaceSelected,
}: InputAutocompleteProps) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
          console.log(details);
          console.log(data);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
      />
    </>
  )
}

export default function Maps({route}) {
  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, setDestination] = useState<LatLng | null>();
  const [showDirections,setShowDirections]= useState(false);
  const [distance,setDistance]= useState(0);
  const [duration,setDuration]= useState(0);
  const [showNewUbicaciones,setShowNewUbicaciones]= useState(true);

  let arrayPuntos = [];
  arrayPuntos= route.params;
  
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


  const mapRef = useRef<MapView>(null)

  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current.getCamera()
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 })
    }
  }
  const edgePaddingValue = 70

  const edgePadding= {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRouteOnReady =(args:any) => {
    if(args) {
      setDistance(args.distance)
      setDuration(args.duration)
    }
  }

  const traceRoute = () => {
    if (origin && destination){
      setShowDirections(true)
      mapRef.current?.fitToCoordinates([origin,destination],{edgePadding})
    }
  }

  const onPlaceSelected = (
    details: GooglePlaceDetail | null,
    flag: "origin" | "destination") => {
    const set = flag === 'origin' ? setOrigin : setDestination
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0
    };
    set(position);
    moveTo(position);
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION} >
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDirections && origin && destination && (<MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_API_KEY}
          strokeColor="#6644ff"
          strokeWidth={4}
          onReady={traceRouteOnReady}
        />)}
      </MapView>
      <View style={styles.searchContainer}>
      

        <InputAutocomplete
          label="Origen"
          onPlaceSelected={(details) => { onPlaceSelected(details, "origin") }} />
        <InputAutocomplete
          label="Destino"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "destination");
          }} />
        <TouchableOpacity style={styles.button} onPress={traceRoute}>
          <Text style={styles.buttonText}>Trazar Ruta</Text>
        </TouchableOpacity>
        {distance && duration ? (<View>
          <Text>Distancia: {distance.toFixed(2)}</Text>
          <Text>Duracion: {Math.ceil(duration)} min</Text>
        </View>
        ): null}
      </View>
  

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