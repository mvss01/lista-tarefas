import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';


interface CheckboxProps {
    checked: boolean
}

export const Checkbox = ({ checked }: CheckboxProps) =>{
    return (
        <View style={[styles.checkbox, checked && styles.checked]}>
            {checked && <Ionicons name="checkmark" size={24} color="#57a6ff" />}
        </View>
    )
}
