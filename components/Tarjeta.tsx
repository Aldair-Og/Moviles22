import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Tarjeta(props: any) {
  
  function mostrarDatos(dato: any) {
    Alert.alert(dato.name.last, "El usuario proviene de: " + dato.homePlanet);
  }

  return (
    <TouchableOpacity style={styles.btn} onPress={() => mostrarDatos(props.informacion)}>
      <View style={styles.card}>
        <Image source={{ uri: props.informacion.images.main }} style={styles.img} />

        <View style={styles.info}>
          <Text style={styles.txt}>
            {props.informacion.name.first} {props.informacion.name.last}
          </Text>
          <Text style={styles.txt2}>Ocupación: {props.informacion.occupation}</Text>
          <Text style={styles.txt2}>Edad: {props.informacion.age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#72e326",
    margin: 10,
    padding: 15,
    borderRadius: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  img: {
    height: 160,
    width: 160,
    resizeMode: 'contain',
    marginRight: 15,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  txt2: {
    fontSize: 14,
    marginBottom: 2,
  },
});
