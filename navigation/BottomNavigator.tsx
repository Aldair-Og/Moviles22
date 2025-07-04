import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import WelcomeScreen from "../screens/WelcomeScreen";
const Tab = createBottomTabNavigator()

function MyTab(){
    return(
        <Tab.Navigator >
            <Tab.Screen 
            name="Welcome" component={WelcomeScreen}
            options={{headerShown: true, 
            tabBarIcon: ({ color, size }) => 
            (<MaterialCommunityIcons name="home" size={24} color="black" />) }}
            />
            


        
        </Tab.Navigator>
        
        )
    
}

export default function NavegadorBottom(){
    return(
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer>
    ) 
}