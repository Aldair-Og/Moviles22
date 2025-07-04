import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Informacion({ nombrePais, capital, continente, poblacion }: any) {

  function mostrarDetalles() {
    Alert.alert("Detalles del País",
      `País: ${nombrePais}\nCapital: ${capital}\nContinente: ${continente}\nPoblación: ${poblacion}`
    )
  }

  return (
    <TouchableOpacity onPress={mostrarDetalles} style={styles.item}>
      <Text style={styles.text}>{nombrePais}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#32a94e",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  }
})
