import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Switch, TextInput } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

export default function FormularioScreen() {

  const [nombre, setnombre] = useState("")
  const [edad, setedad] = useState(0)
  const [datos, setdatos] = useState({"nombre": "", "edad": 0} )
  const [estado, setestado] = useState(false)


  function guardar(){
    if(nombre.trim() !=""  && edad.toString().trim()){
      setdatos(
      {
        "nombre": nombre.trim(),
        "edad": edad,
      }
    )

    Alert.alert("Mensaje", "Los datos se han guardado con exito")
  }else{
    Alert.alert("Error", "No se permiten campos en blanco")
  }

}
    

  

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60}}>Formulario</Text>

      <TextInput placeholder='Ingresar nombre'
      style={styles.input} onChangeText={ (texto)=> setnombre(texto) }/>


      <TextInput placeholder='Ingresar edad' keyboardType='number-pad'
      style={styles.input} onChangeText={ (texto)=> setedad(+texto) }/>

      <Button title='Guardar' onPress={()=> guardar()}/>

        <View style={styles.linea}/>
        <Text style={styles.txt}>Ver Datos</Text>
        <Switch value={estado} onValueChange={ ()=> setestado(!estado)}/>
        <View style={styles.linea}/>

        {
          estado == true ? <View>
          <Text style={styles.txt}>Nombre: {datos.nombre}</Text>
          <Text style={styles.txt}>Edad: {datos.edad}</Text>
        </View>
        : <Text style={styles.txt}>Alerta de datos mostrados</Text>
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
  txt:{
    fontSize: 20,
    color: "white"

  },
  input: {
    fontSize: 25,
    backgroundColor: "#32a94e",
    width: "80%",
    borderRadius: 20,
    margin: 8,
  },
  linea:{
        backgroundColor:  '#666',
        width: "90%",
        borderWidth:1,
        margin: 10,
      },



});

