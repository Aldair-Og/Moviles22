import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tab = createBottomTabNavigator()

function MyTab(){
    return(
        <Tab.Navigator initialRouteName="Calculadora">
            <Tab.Screen 
            name="Welcome" component={WelcomeScreen}
            options={{headerShown: true, 
            tabBarIcon: ({ color, size }) => 
            (<MaterialCommunityIcons name="home" size={24} color="black" />) }}
            />
            
            <Tab.Screen name="Login" component={LoginScreen}
            options={{tabBarIcon: ({ color, size }) =>(
                <AntDesign name="login" size={24} color="black" />
            )}}/>




            <Tab.Screen name="Calculadora" component={CalculadoraScreen}
            options={{tabBarIcon: ({ color, size }) =>(
                <Entypo name="calculator" size={24} color="black" />
            )}}/>
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