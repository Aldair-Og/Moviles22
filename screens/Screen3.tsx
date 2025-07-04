import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/Config'

export default function Screen3() {
  const [nombrePais, setNombrePais] = useState("")
  const [capital, setCapital] = useState("")
  const [continente, setContinente] = useState("")
  const [poblacion, setPoblacion] = useState("")
  const [registroCargado, setRegistroCargado] = useState(false)

  async function buscar() {
    if (!nombrePais.trim()) {
      Alert.alert("Error", "Ingresa el nombre del país para buscar")
      return
    }
    try {
      const docRef = doc(db, "paises", nombrePais.trim())
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()
        setCapital(data.capital || "")
        setContinente(data.continente || "")
        setPoblacion(data.poblacion || "")
        setRegistroCargado(true)
      } else {
        Alert.alert("No encontrado", "No existe un país con ese nombre")
        limpiarCampos()
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo buscar el país")
      limpiarCampos()
    }
  }

  async function editar() {
    if (!registroCargado) {
      Alert.alert("Error", "Primero busca un país válido")
      return
    }
    if (!capital.trim() || !continente.trim() || !poblacion.trim()) {
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
      Alert.alert("Éxito", "País actualizado correctamente")
    } catch (error) {
      Alert.alert("Error", "No se pudo actualizar el país")
    }
  }

  function confirmarEliminar() {
    if (!registroCargado) {
      Alert.alert("Error", "Primero busca un país válido")
      return
    }
    Alert.alert(
      "Confirmar eliminación",
      `¿Deseas eliminar el país ${nombrePais.trim()}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", style: "destructive", onPress: eliminar }
      ]
    )
  }

  async function eliminar() {
    try {
      await deleteDoc(doc(db, "paises", nombrePais.trim()))
      Alert.alert("Éxito", "País eliminado")
      limpiarCampos()
    } catch (error) {
      Alert.alert("Error", "No se pudo eliminar el país")
    }
  }

  function limpiarCampos() {
    setCapital("")
    setContinente("")
    setPoblacion("")
    setRegistroCargado(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar / Eliminar País</Text>

      <TextInput
        placeholder="Nombre del país"
        style={styles.input}
        value={nombrePais}
        onChangeText={setNombrePais}
      />
      <Button title="Buscar País" onPress={buscar} />

      {registroCargado && (
        <>
          <TextInput
            placeholder="Capital"
            style={styles.input}
            value={capital}
            onChangeText={setCapital}
          />
          <TextInput
            placeholder="Continente"
            style={styles.input}
            value={continente}
            onChangeText={setContinente}
          />
          <TextInput
            placeholder="Población"
            style={styles.input}
            value={poblacion}
            onChangeText={setPoblacion}
            keyboardType="number-pad"
          />

          <Button title="Editar" onPress={editar} color="#32a94e" />
          <View style={{ marginVertical: 10 }} />
          <Button title="Eliminar" onPress={confirmarEliminar} color="#d9534f" />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    fontSize: 18,
    backgroundColor: "#ddd",
    marginVertical: 6,
    padding: 10,
    borderRadius: 8,
  },
})
