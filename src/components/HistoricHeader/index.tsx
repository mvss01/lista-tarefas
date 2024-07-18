import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";
interface HistoricHeaderProps {
    onPressBack: () => void
    onPressClear: () => void
}

export const HistoricHeader = ({ onPressBack, onPressClear }: HistoricHeaderProps) =>{
    return (
        <View style={styles.container}>
            <Pressable onPress={onPressBack}>
                <MaterialIcons name="arrow-back-ios-new" size={30} color="#FFFFFF" />
            </Pressable>
            <Text style={styles.title}>
                Histórico
            </Text>
            <Pressable style={styles.clear} onPress={onPressClear}>
                <Feather name="trash" size={30} color="#ffffffa4" />
            </Pressable>
        </View>
    )
}
