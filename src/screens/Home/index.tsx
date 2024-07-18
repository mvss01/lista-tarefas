import React, { useContext } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { Input } from "../../components/Input";
import { HomeList } from "../../components/HomeList";
import { HomeHeader } from "../../components/HomeHeader";
import { TasksContext } from '../../contexts';

export const Home = ({ navigation }: any) => {
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error("Context failed!")
    }

    const { state, dispatch } = context;

    return(
        <>
        <View style={styles.container}>
            <HomeHeader onPress={() => navigation.navigate('historic')}/>
            <HomeList onPressTask={(title: string) => dispatch({type: "checkTask", payload: title})} onPressTrash={(title: string) => dispatch({type: "removeTask", payload: title})} tasks={state.tasks}/>
            <Input onPress={() => dispatch({type: "addTask", payload: {title: state.inputValue, status: false}})} onChangeText={(value) => dispatch({type:"setInputValue", payload: value})} text={state.inputValue} />
        </View>
        <StatusBar style="light" />
        </>
    )
}
