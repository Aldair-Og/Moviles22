import { Button, Image, Modal, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta2(props: any) {


    const [visble, setvisble] = useState(false)




  return (
    <View>
    <TouchableOpacity style={styles.fila} onPress={()=> setvisble(true)}>
        <Image source={{uri: props.informacion.image}}
        style={styles.img}/>
      <Text>{props.informacion.name}</Text>
    </TouchableOpacity>


    <Modal 
    visible = {visble}
    transparent={true}
    >
        <View style={styles.modal}>
            <View style={styles.modalContainer}>
        <Image source={{uri: props.informacion.image}} style={styles.imgModal}/>
        <Text style={styles.txt}>{props.informacion.name}</Text>
        <Button title='cerrar ' onPress={()=>setvisble(false)}/>
        </View>
        </View>
    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modalContainer:{
        width: "90%",
        height: "60%",
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20

    },
    modal:{
        backgroundColor: "#6666668a",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    txt:{
        fontSize: 40
    },
    img:{
        height: 70,
        width: 70,
        resizeMode: 'contain'

    },
    fila:{
        flexDirection: "row",
        backgroundColor: "#b49ddd",
        margin: 10
    },
    imgModal:{
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
})