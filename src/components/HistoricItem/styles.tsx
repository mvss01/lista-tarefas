import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 8
    },
    restore: {
        transform: [{ scaleX: -1 }]
    },
    title: {
        flex: 1,
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    exclude: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    }

})
