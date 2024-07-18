import React from "react"
import { View, TextInput } from "react-native"
import { styles } from "./styles"
import { Button } from "../Button"

interface InputProps {
    onChangeText: (text: string) => void
    onPress: () => void
    text: string
}

export const Input = ({ onChangeText, onPress, text }: InputProps) => {
    return(
        <View style={styles.container}>
            <TextInput value={text} onChangeText={onChangeText} placeholder="Digite aqui..." placeholderTextColor="#278cff6b" cursorColor="#278cff" selectionColor="#CFE2FF" style={styles.input}/>
            <Button onPress={onPress} />
        </View>
    )
}
