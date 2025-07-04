import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/Config'

export default function Screen1({ navigation }: any) {
  const [nombrePais, setNombrePais] = useState("")
  const [capital, setCapital] = useState("")
  const [continente, setContinente] = useState("")
  const [poblacion, setPoblacion] = useState("")

  async function guardar() {
    if (!nombrePais.trim() || !capital.trim() || !continente.trim() || !poblacion.trim()) {
      Alert.alert("Error", "Todos los campos son obligatorios")
      return
    }

    try {
      await setDoc(doc(db, "paises", nombrePais.trim()), {
        nombrePais: nombrePais.trim(),
        capital: capital.trim(),
        continente: continente.trim(),
        poblacion: poblacion.trim(),
      })
      Alert.alert("Éxito", "País registrado con éxito")
      setNombrePais("")
      setCapital("")
      setContinente("")
      setPoblacion("")
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar el país")
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guardar País</Text>
      
      <TextInput
        placeholder='Ingresar nombre del país'
        onChangeText={setNombrePais}
        value={nombrePais}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar capital'
        onChangeText={setCapital}
        value={capital}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar continente'
        onChangeText={setContinente}
        value={continente}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar población'
        onChangeText={setPoblacion}
        value={poblacion}
        style={styles.input}
      />

      <Button title='Guardar' onPress={guardar} />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Tab")}
      >
        <Text style={styles.btnText}>Ir a Screen2</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    fontSize: 18,
    backgroundColor: "#ddd",
    marginVertical: 6,
    padding: 10,
    borderRadius: 8,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#32a94e',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
