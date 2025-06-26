import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Switch } from 'react-native-gesture-handler'

export default function DireccionScreen() {

  const [calle, setCalle] = useState("")
  const [numero, setNumero] = useState(0)
  const [ciudad, setCiudad] = useState("")
  const [referencias, setReferencias] = useState("")
  const [esFiscal, setEsFiscal] = useState(false)
  const [estado, setEstado] = useState(false)

  const [datos, setDatos] = useState({
    calle: "",
    numero: 0,
    ciudad: "",
    referencias: "",
    esFiscal: false
  })

  function guardar() {
    if (calle.trim() != "" && numero.toString().trim() !="" && ciudad.trim() !="") {
      setDatos({
        calle: calle.trim(),
        numero: numero,
        ciudad: ciudad.trim(),
        referencias: referencias.trim(),
        esFiscal: esFiscal
      })
      Alert.alert("Mensaje", "Dirección guardada con éxito")
    } else {
      Alert.alert("Error", "Todos los campos son obligatorios excepto Referencias")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Dirección</Text>

      <TextInput
        placeholder='Calle'
        style={styles.input}
        onChangeText={(texto) => setCalle(texto)}
      />

      <TextInput
        placeholder='Número exterior'
        keyboardType='number-pad'
        style={styles.input}
        onChangeText={(texto) => setNumero(+texto)} 
      />

      <TextInput
        placeholder='Ciudad'
        style={styles.input}
        onChangeText={(texto) => setCiudad(texto)}
      />

      <TextInput
        placeholder='Referencias (opcional)'
        style={styles.input}
        onChangeText={(texto) => setReferencias(texto)}
      />

      <View style={styles.switch}>
        <Text style={styles.txt}>¿Es fiscal?</Text>
        <Switch value={esFiscal} onValueChange={() => setEsFiscal(!esFiscal)} />
      </View>

      <Button title='Guardar' onPress={guardar} />

      <View style={styles.linea} />
      <Text style={styles.txt}>Ver Dirección</Text>
      <Switch value={estado} onValueChange={() => setEstado(!estado)} />
      <View style={styles.linea} />

      {
        estado === true ?
          <View>
            <Text style={styles.txt}>Calle: {datos.calle}</Text>
            <Text style={styles.txt}>Número: {datos.numero}</Text>
            <Text style={styles.txt}>Ciudad: {datos.ciudad}</Text>
            {datos.referencias !== "" && <Text style={styles.txt}>Referencias: {datos.referencias}</Text>}
            <Text style={styles.txt}>Fiscal: {datos.esFiscal ? "Sí" : "No"}</Text>
          </View>
          :
          <Text style={styles.txt}>Alerta de datos mostrados</Text>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a93262',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    backgroundColor: '#32a94e',
    width: '80%',
    borderRadius: 20,
    margin: 8,
    padding: 10
  },
  txt: {
    fontSize: 18,
    color: "white"
  },
  linea: {
    backgroundColor: '#666',
    width: "90%",
    borderWidth: 1,
    margin: 10,
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  }
});
