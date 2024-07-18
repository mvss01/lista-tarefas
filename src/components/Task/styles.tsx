import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    task: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    title: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    strikethrough: {
        textDecorationLine: "line-through"
    },
    checkbox: {
    },
    trash: {

    }
})
