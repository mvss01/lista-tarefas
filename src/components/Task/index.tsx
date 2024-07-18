import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { Checkbox } from "../Checkbox";

interface TaskProps {
    title: string
    status: boolean
    onPressTask: () => void
    onPressTrash: () => void
}

export const Task = ({ title, status, onPressTask, onPressTrash }: TaskProps) => {
    return(
        <View style={styles.container}>
            <Pressable style={styles.task} onPress={onPressTask}>
                <Checkbox checked={status}/>
                <Text style={[styles.title, status && styles.strikethrough]}>{title}</Text>
            </Pressable>
            <Pressable style={styles.trash} onPress={onPressTrash}>
                <Feather name="trash" size={24} color="#FFFFFF" />
            </Pressable>
        </View>
    )
}
