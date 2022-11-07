import { StyleSheet, Text,View } from "react-native";

export function Cajeros(){
    return (
        <View style={styles.container}>
            <Text>Cajeros</Text>
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