import React from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { HistoricItem } from "../HistoricItem";
import { TrashProps } from "../../contexts";

interface ListProps {
    onPressRestore: (title: string) => void
    onPressExclude: (title: string) => void
    trash: TrashProps[]
}

export const HistoricList = ({onPressRestore, onPressExclude, trash}: ListProps) => {
    return(
        <View style={[styles.container, trash.length <= 0 && { flexDirection: 'column', justifyContent: 'center'}]}>
            {trash.length > 0 ? (
                <ScrollView style={styles.list}>
                    {trash.map((trash: TrashProps) => (
                        <HistoricItem key={trash.title} title={trash.title} onPressRestore={() => onPressRestore(trash.title)}  onPressExclude={() => onPressExclude(trash.title)} />
                    ))}
                </ScrollView>
            ) : (
                <>
                    <Text style={styles.message}>Histórico vazio.</Text>
                </>
            )}
        </View>
    )
}
