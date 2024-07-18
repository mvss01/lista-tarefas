import React from "react";
import { Pressable } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';

interface ButtonProps {
    onPress: () => void
}
export const Button = ({ onPress }: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.button, {backgroundColor: pressed ? "#2179de" : "#278cff"}]} >
            <AntDesign name="arrowup" size={28} color="#FFFFFF" />
        </Pressable>
    )
}
