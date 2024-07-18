import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { styles } from "./styles";
import { Task } from "../Task";
import { TaskProps } from "../../contexts";
import Arrow from "../../../assets/handmade-arrow.png"

interface ListProps {
    onPressTask: (title: string) => void
    onPressTrash: (title: string) => void
    tasks: TaskProps[]
}

export const HomeList = ({onPressTask, onPressTrash, tasks}: ListProps) => {
    return(
        <View style={[styles.container, tasks.length <= 0 && { flexDirection: 'column', justifyContent: 'flex-end', gap: 16 }]}>
            {tasks.length > 0 ? (
                <ScrollView style={styles.list}>
                    {tasks.map((task: TaskProps) => (
                        <Task
                            key={task.title}
                            title={task.title}
                            status={task.status}
                            onPressTask={() => onPressTask(task.title)}
                            onPressTrash={() => onPressTrash(task.title)}
                        />
                    ))}
                </ScrollView>
            ) : (
                <>
                    <Text style={styles.message}>Adicione tarefas</Text>
                    <Image source={Arrow} style={styles.arrow} />
                </>
            )}
    </View>
    )
}
