import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import Tarjeta2 from '../../components/Tarjeta2';

export default function ListaExternaScreen() {

    const [datos, setdatos] = useState([])

    async function leer() {

        const resp = await fetch('https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json');
        const json = await resp.json();

        setdatos(json)
    }

    useEffect(() => {
        leer()
        //console.log(datos);

    
    }, [])
    


    return (
        <View>
            <Text>ListaExterna</Text>
            <SectionList
            sections={datos}
            renderItem={({item})=>
                <Tarjeta2 informacion ={item}/>
        }

        renderSectionHeader={({section:{title}})=>
        <Text style={{fontSize:30}}>{title}</Text>
        }
            />

        </View>
    )
}

const styles = StyleSheet.create({})