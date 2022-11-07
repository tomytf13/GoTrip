import { Text,StyleSheet, View } from 'react-native';

export function MisViajes() {
    return (
        <View style={styles.container}>
            <Text>Mis Viajes</Text>
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