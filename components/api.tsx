import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Api({ informacion }: any) {
  const [visible, setVisible] = useState(false)

  return (
    <View>
      <TouchableOpacity style={styles.fila} onPress={() => setVisible(true)}>
        <Image source={{ uri: informacion.imagen }} style={styles.img} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.nombre}>{informacion.ciudad}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent={true}
        animationType='slide'
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Image source={{ uri: informacion.imagen }} style={styles.imgModal} />
            <Text style={styles.txt}>{informacion.ciudad}</Text>
            <Text style={styles.sub}>País: {informacion.pais}</Text>
            <Text style={styles.sub}>Habitantes: {informacion.habitantes}</Text>
            <Button title='Cerrar' onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    backgroundColor: "#b49ddd",
    margin: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  modal: {
    flex: 1,
    backgroundColor: "#00000088",
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: 'center'
  },
  imgModal: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },
  txt: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  sub: {
    fontSize: 18,
    marginTop: 5
  }
})
