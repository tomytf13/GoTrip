import { Text,StyleSheet, View } from 'react-native';

export function PuntosDeCarga() {
    return (
        <View style={styles.container}>
            <Text>Puntos De Carga</Text>
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