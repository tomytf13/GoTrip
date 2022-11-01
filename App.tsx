import MapView, { LatLng, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from './environments';
import Constants from 'expo-constants';
import React, { useState, useRef } from 'react'

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

export default function App() {
  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, setDestination] = useState<LatLng | null>();
  const mapRef = useRef<MapView>(null)
  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current.getCamera()
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 })
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
        initialRegion={INITIAL_POSITION} />
      <View style={styles.searchContainer}>

        <InputAutocomplete
          label="Origin"
          onPlaceSelected={(details) => { onPlaceSelected(details, "origin") }} />
        <InputAutocomplete
          label="Destination"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "destination");
          }} />
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

  }
});