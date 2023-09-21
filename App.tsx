import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"

import HomeNote from './src/home/HomeNote';


const Stack = createStackNavigator(); 
function MyStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'HomeNote' component={HomeNote} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default function App () {
    return (
        <NavigationContainer>
            <MyStack/>

        </NavigationContainer>
        
    )
}