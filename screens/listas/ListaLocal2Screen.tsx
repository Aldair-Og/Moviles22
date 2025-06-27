import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'


import datos from "../../assets/data/characters.json"
import Tarjeta from '../../components/Tarjeta'


export default function ListaLocal2Screen() {
  return (
    <View>
      <Text>ListaLocal2Screen</Text>
      <FlatList 
      data={datos} renderItem={ ( {item} )=>
      <Tarjeta informacion = {item}/>
      
      
    }
        />
    </View>
  )
}

const styles = StyleSheet.create({})