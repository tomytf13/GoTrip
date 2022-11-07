import { StyleSheet, Text,View } from "react-native";

export function DestinosTuristicos(){
    return (
        <View style={styles.container}>
            <Text>Destinos Turisticos</Text>
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