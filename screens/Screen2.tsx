import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase/Config'
import Informacion from '../components/Informacion'

type Pais = {
  id: string
  nombrePais: string
  capital: string
  continente: string
  poblacion: string
}

export default function Screen2() {
  const [nombrePaisBuscar, setNombrePaisBuscar] = useState("")
  const [listaPaises, setListaPaises] = useState<Pais[]>([])

  async function buscarPorNombrePais() {
    if (!nombrePaisBuscar.trim()) {
      Alert.alert("Error", "Debes ingresar el nombre del país")
      return
    }

    try {
      const docRef = doc(db, "paises", nombrePaisBuscar.trim())
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()
        Alert.alert("Datos del País",
          `País: ${data.nombrePais}\nCapital: ${data.capital}\nContinente: ${data.continente}\nPoblación: ${data.poblacion}`
        )
      } else {
        Alert.alert("No encontrado", "No existe un país con ese nombre")
      }
    } catch (error) {
      console.error(error)
      Alert.alert("Error", "No se pudo obtener el país")
    }
  }

  async function traerTodos() {
    try {
      const querySnapshot = await getDocs(collection(db, "paises"))
      const datos: Pais[] = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        datos.push({
          id: doc.id,
          nombrePais: data.nombrePais ?? "",
          capital: data.capital ?? "",
          continente: data.continente ?? "",
          poblacion: data.poblacion ?? "",
        })
      })
      setListaPaises(datos)
    } catch (error) {
      console.error(error)
      Alert.alert("Error", "No se pudo traer la lista de países")
    }
  }

  useEffect(() => {
    traerTodos()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar un País por Nombre</Text>
      <TextInput
        placeholder='Ingrese el nombre del país'
        style={styles.input}
        value={nombrePaisBuscar}
        onChangeText={setNombrePaisBuscar}
      />
      <Button title='Buscar País' onPress={buscarPorNombrePais} />

      <View style={styles.linea} />

      <Text style={styles.title}>Lista de Países</Text>
      <FlatList
        data={listaPaises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Informacion
            nombrePais={item.nombrePais}
            capital={item.capital}
            continente={item.continente}
            poblacion={item.poblacion}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  input: {
    fontSize: 18,
    backgroundColor: "#ddd",
    marginVertical: 6,
    padding: 10,
    borderRadius: 8,
  },
  linea: {
    backgroundColor: '#666',
    width: "100%",
    height: 1,
    marginVertical: 20,
  },
})
