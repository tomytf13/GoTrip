import { StyleSheet, Text,View } from "react-native";

export function Inicio(){
    return (
        <View style={styles.container}>
            <Text>Inicio</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});