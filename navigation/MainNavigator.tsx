import { createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import FormularioScreen from "../screens/FormularioScreen";
import RegistroScreen from "../screens/RegistroScreen";
import DireccionScreen from "../screens/DireccionScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListaLocal1Screen from "../screens/listas/ListaLocal1Screen";
import ListaLocal2Screen from "../screens/listas/ListaLocal2Screen";
import EncuestaScreen from "../screens/EncuestaScreen";

const Stack = createStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator >
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Tab" component={MyTabs}/>
      <Stack.Screen name="Calculadora" component={CalculadoraScreen}/>
    </Stack.Navigator>
  )
}


const Tab = createBottomTabNavigator()

function MyTabs(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Formulario" component={FormularioScreen}/>
      <Tab.Screen name="Registro" component={RegistroScreen}/>
      <Tab.Screen name="Direccion" component={DireccionScreen}/>
      <Tab.Screen name="Encuesta" component={EncuestaScreen}/>
      <Tab.Screen name="Top" component={MyTops}/>

    </Tab.Navigator>

  
  )
}


const Top = createMaterialTopTabNavigator()
function MyTops(){
    return(
        <Top.Navigator initialRouteName="ListaLocal1">
        <Top.Screen name="ListaLocal1" component={ListaLocal1Screen}/>
        <Top.Screen name="ListaLocal2" component={ListaLocal2Screen}/>
        </Top.Navigator>
    )
}



export default function NavegadorPrincipal(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}