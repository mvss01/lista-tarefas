import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25,
        alignItems: "center",
        height: "auto",
    },
    list: {
        flex: 1,
        width: "100%"
    },
    message: {
        fontFamily: "ShantellSans_600SemiBold",
        fontSize: 30,
        textAlign: "center",
        color: "#ffffff50"
    },
    arrow: {
        alignSelf: "center",
        transform: [{ scaleY: -1 }],
        opacity: 0.3
    }
})
