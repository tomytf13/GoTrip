import { Text,StyleSheet, View } from 'react-native';

export function PuntoTuristicoSeleccionado( props) {
    return (
        <View style={styles.container}>
            <Text>PuntoTuristicoSeleccionado</Text>
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