import React, { useContext } from "react"
import { View } from "react-native"
import { styles } from "./styles"
import { HistoricHeader } from "../../components/HistoricHeader"
import { HistoricList } from "../../components/HistoricList"
import { TasksContext } from '../../contexts';

export const Historic = ({ navigation }: any) => {
    const context = useContext(TasksContext)

    if(!context){
        throw new Error("Context failed!")
    }

    const {state, dispatch } = context

    return (
        <View style={styles.container}>
            <HistoricHeader onPressBack={() => navigation.navigate("home")} onPressClear={() => dispatch({type: 'clearTrash'})}/>
            <HistoricList onPressRestore={(title: string) => dispatch({type: 'restoreTrash', payload: title})} onPressExclude={(title: string) => dispatch({type: "excludeTrash", payload: title})} trash={state.trash}/>
        </View>
    )
}
