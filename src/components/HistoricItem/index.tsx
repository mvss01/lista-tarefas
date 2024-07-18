import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


interface TrashProps {
    title: string
    onPressRestore: () => void
    onPressExclude: () => void
}

export const HistoricItem = ({ title, onPressRestore, onPressExclude }: TrashProps) => {
    return(
        <View style={styles.container}>
            <Pressable style={styles.restore} onPress={onPressRestore}>
            <Ionicons name="reload-circle" size={40} color="#FFFFFF" />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <Pressable style={styles.exclude} onPress={onPressExclude}>
                <Fontisto name="close-a" size={20} color="#ffffff" />
            </Pressable>

        </View>
    )
}
