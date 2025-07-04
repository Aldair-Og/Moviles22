import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../components/api'

export default function Screen4() {
  const [datos, setDatos] = useState([])

  async function leer() {
    const resp = await fetch('https://jritsqmet.github.io/web-api/ciudades2.json')
    const json = await resp.json()
    setDatos(json)
  }

  useEffect(() => {
    leer()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ciudades desde API</Text>
      <FlatList
        data={datos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Api informacion={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 10
  }
})
