import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aldair Endara</Text>
      <Image 
        source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/22788.jpg" }} 
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.buttonContainer}>
        <Button 
          title='Ingresar' 
          onPress={() => navigation.navigate("Screen1")}
          color="#007BFF"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  img: {
    width: 400,
    height: 400,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#ccc'
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  }
})
