import { createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListaExternaScreen from "../screens/listas/Screen4";
import Screen1 from "../screens/Screen1";
import Screen3 from "../screens/Screen3";
import Screen2 from "../screens/Screen2";



const Stack = createStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator >
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Screen1" component={Screen1}/>
      <Stack.Screen name="Tab" component={MyTabs}/>

    </Stack.Navigator>
  )
}


const Tab = createBottomTabNavigator()

function MyTabs(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Screen2" component={Screen2}/>
      <Tab.Screen name="Top" component={MyTops}/>

    </Tab.Navigator>

  
  )
}


const Top = createMaterialTopTabNavigator()
function MyTops(){
    return(
        <Top.Navigator>
        <Top.Screen name="Screen3" component={Screen3}/>
        <Top.Screen name="Screen4" component={ListaExternaScreen}/>
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