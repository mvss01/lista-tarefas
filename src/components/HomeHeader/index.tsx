import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";

interface HomeHeaderProps {
    onPress: () => void

}
export const HomeHeader = ({ onPress }: HomeHeaderProps) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Minhas Tarefas
            </Text>
            <Pressable onPress={onPress}>
                <MaterialIcons name="history" size={35} color="#ffffffa5" />
            </Pressable>
        </View>
    )
}
