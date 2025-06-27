import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaLocal1Screen() {


    let datos =[
        {
            "cedula":"1750847814",
            "nombre":"Juan Perez",
            "edad":22
        },
        {
            "cedula":"1750857814",
            "nombre":"Jorge Chimbo",
            "edad":18

        },
        {
            "cedula":"1750837814",
            "nombre":"Ana Revelo",
            "edad":80
        },
    ]




    return (
        <View>
            <Text>Lista  Local</Text>
            <FlatList
            data={datos}
            renderItem={ ( { item} ) =>
                <View>
                    <Text>Nombre: {item.nombre}</Text>
                    <Text>Edad: {item.edad}</Text>

                </View>
                
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({})