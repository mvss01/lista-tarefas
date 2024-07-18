import { createStackNavigator } from "@react-navigation/stack";

const { Screen, Navigator } = createStackNavigator()

import { Home } from "../screens/Home";
import { Historic } from "../screens/Historic";

export const StackRoutes = () => {
    return(
        <Navigator>
            <Screen name="home" component={Home} options={{headerShown: false}}/>
            <Screen name="historic" component={Historic} options={{headerShown: false}}/>
        </Navigator>
    )
}
