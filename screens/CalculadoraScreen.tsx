import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'



export default function CalculadoraScreen() {

const [numero1, setnumero1] = useState(0)
const [numero2, setnumero2] = useState(0)

useEffect(() => {
    if(numero1 <=-6){
        setnumero1(-6)
    }
    if(numero1 >= 5){
        setnumero1(5)
    }
}, [ numero1, numero2])

function sumar() {
    const resultado = numero1 + numero2;
    Alert.alert("Resultado", "La suma es: " + resultado)
}



    return (
    <View style={styles.container}>
        <Text style={{fontSize: 30}}>Calculadora</Text>

    <View style={styles.fila}>
        <Button title=' - '  onPress={()=>setnumero1(numero1 -1 )}/>
        <Text style={{fontSize: 30}}>   {numero1}   </Text>
        <Button title=' + 'onPress={()=>setnumero1(numero1 +1 )}/>
        </View>



        <View style={styles.fila}>
        <Button title=' - '  onPress={()=>setnumero2(numero2 -1 )} color={'green'}/>
        <Text style={{fontSize: 30}}>   {numero2}   </Text>
        <Button title=' + 'onPress={()=>setnumero2(numero2 +1 )}color={'green'}/>
        </View>
        <View style={styles.linea}/>
        <Button title='suma' onPress={sumar}/>
    




    </View>
    )
}

const styles = StyleSheet.create({
    fila:{
        flexDirection: 'row'
    },
    linea:{
        backgroundColor:  '#666',
        width: 200,
        borderWidth:1,
        margin: 10,

    },
    container: {
    flex: 1,
    backgroundColor: '#b94cc8',
    alignItems: 'center',
    justifyContent: 'center',
},
});

