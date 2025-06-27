import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Switch } from 'react-native-gesture-handler'
import { RadioButton, Checkbox } from 'react-native-paper'
import Slider from '@react-native-community/slider'

export default function EncuestaScreen() {
    const [contacto, setContacto] = useState("")
    const [recomienda, setRecomienda] = useState("")
    const [razon, setRazon] = useState("")
    const [permiteContacto, setPermiteContacto] = useState(false)
    
    const [diseño, setDiseño] = useState(false)
    const [usabilidad, setUsabilidad] = useState(false)
    const [rendimiento, setRendimiento] = useState(false)
    
    const [valoracion, setValoracion] = useState(5)


    
    function guardar() {
    if(contacto.trim() == "" || recomienda == "" || razon.trim() == ""){
        Alert.alert("Error", "Todos los campos son obligatorios")
    } else {
        Alert.alert("Exito", "Encuesta guardada correctamente")
    }
}



return (
    <View style={styles.container}>
        <Text style={{ fontSize: 30, color: 'white' }}>Encuesta</Text>
        <TextInput placeholder='Contacto' style={styles.input} onChangeText={(texto) => setContacto(texto)}/>
        
        
        <Text style={styles.txt}>¿Recomendarias nuestra app?</Text>
        <RadioButton.Group onValueChange={value => setRecomienda(value)} value={recomienda}>

            <View style={styles.radioBtn}>
                <RadioButton value="Sí" /><Text style={styles.txt}>Sí</Text>
                <RadioButton value="No" /><Text style={styles.txt}>No</Text>
                <RadioButton value="Quizás" /><Text style={styles.txt}>Quizás</Text>
                </View>
                </RadioButton.Group>

            <TextInput placeholder='valoracion' style={styles.input} 
            onChangeText={(texto) => setRazon(texto)}/>
            
            
            <Text style={styles.txt}>¿Que te gustó?</Text>

            <View style={styles.checkbox}>
            <Checkbox status={diseño ? 'checked' : 'unchecked'} 
            onPress={() => setDiseño(!diseño)}/>
            <Text style={styles.txt}>Diseño</Text>
            </View>
            
            
            
            <View style={styles.checkbox}>
            <Checkbox status={usabilidad ? 'checked' : 'unchecked'} 
            onPress={() => setUsabilidad(!usabilidad)}/><Text style={styles.txt}>Usabilidad</Text>
            </View>
            
            
            <View style={styles.checkbox}>
            <Checkbox status={rendimiento ? 'checked' : 'unchecked'}
            onPress={() => setRendimiento(!rendimiento)}/>
            <Text style={styles.txt}>Rendimiento</Text>
            </View>
            
            
            <Text style={styles.txt}>Valoración: {valoracion.toFixed(1)}</Text>
            <Slider style={{width: 200, height: 40}} minimumValue={1} maximumValue={10}
            step={0.5}
            value={valoracion}
            onValueChange={setValoracion}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"/>
            
            
            <View style={styles.switch}>
            <Text style={styles.txt}>Permitir contacto para seguimiento</Text>
            <Switch value={permiteContacto} onValueChange={() => setPermiteContacto(!permiteContacto)} />
            </View>
            <Button title='Guardar' onPress={guardar} />
            </View>
            )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#a93262',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
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
    
    radioBtn: {
    flexDirection: 'row',
    alignItems: 'center'
    },
    
    checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
    },
    
    switch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
    },
});
