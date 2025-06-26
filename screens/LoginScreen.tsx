import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function LoginScreen({navigation }: any) {
return (
    <View style={styles.container}>
    <Text style={[styles.txt, {fontSize: 60}]}>Login</Text>

    <TextInput
    placeholder='Ingresar usuario'
    style= {[styles.Input,  styles.txt]}/>

    <TextInput placeholder='Ingresar constraseña'
    style= {[styles.Input, styles.txt]}/>

    <TouchableOpacity  style={styles.btn} onPress={()=> navigation.navigate("Tab")}>
        <View style={styles.fila}>
            <Text style={styles.txt}>Ir a Calculadora</Text> 
        <MaterialCommunityIcons name="login" size={35} color="#ffffff" />
        
        </View>
        <Image source={require("../assets/images/calculator.png")} style={styles.img}/>

        
    </TouchableOpacity>

    <TouchableOpacity
        style={[styles.btn, { marginTop: 20 }]}
        onPress={() => navigation.navigate("Registro")}
      >
        <Text style={styles.txt}>Ir a Registro</Text>
      </TouchableOpacity>

    

    </View>







)
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: "#1b6d9d",
        flex: 1,
        justifyContent: 'center'
    },
    fila:{
        flexDirection: 'row'

    },
    img:{
        width: 70,
        height: 70,

    },
    btn:{
        backgroundColor: "#bf0808",
        width: "80%",
        height: 120,
        alignItems: 'center',
        borderRadius: 20,
        padding: 8,


    },
    Input:{
        backgroundColor: "#666",
        width: "85%",
        height: 50,
        margin: 5,
        borderRadius: 20,
        paddingHorizontal: 20,
        fontSize: 20,
        
    },
    txt:{
        color: 'white',
        fontSize: 30,

    }
})