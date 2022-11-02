import { Text,StyleSheet, View } from 'react-native';

export function PuntosTuristicos() {
    return (
        <View style={styles.container}>
            <Text>PuntosTuristicos</Text>
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