import { Alert, Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Switch } from 'react-native-gesture-handler';

export default function RegistroScreen({ navigation }: any) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [suscripcion, setSuscripcion] = useState(false);

    function registrar() {
        if (
            nombre.trim() !== "" &&
            apellido.trim() !== "" &&
            email.trim() !== "" &&
            telefono.trim() !== "" &&
            password.trim() !== "" &&
            confirmarPassword.trim() !== ""
        ) {
            if (isNaN(Number(telefono))) {
                Alert.alert("Error", "El teléfono debe ser numérico");
                return;
            }
            if (password !== confirmarPassword) {
                Alert.alert("Error", "Las contraseñas no coinciden");
                return;
            }
            if (!aceptaTerminos) {
                Alert.alert("Error", "Debe aceptar los términos y condiciones");
                return;
            }

            Alert.alert(
                "Registro exitoso",
                `Bienvenido/a ${nombre} ${apellido}\nEmail: ${email}\nSuscripción: ${suscripcion ? "Sí" : "No"}`
            );
        } else {
            Alert.alert("ERROR", "No se permiten campos en blanco");
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Registro</Text>

            <TextInput

                style={styles.input}

                placeholder="Nombre"

                onChangeText={setNombre} />


            <TextInput

                style={styles.input}

                placeholder="Apellido"

                onChangeText={setApellido} />

            <TextInput

                style={styles.input}

                placeholder="Email"

                onChangeText={setEmail}
                keyboardType="email-address" />

            <TextInput

                style={styles.input}

                placeholder="Teléfono"

                onChangeText={setTelefono}
                keyboardType="numeric" />

            <TextInput

                style={styles.input}

                placeholder="Contraseña"

                onChangeText={setPassword}
                secureTextEntry />

            <TextInput

                style={styles.input}

                placeholder="Confirmar Contraseña"

                onChangeText={setConfirmarPassword} secureTextEntry />

            <View style={styles.switchContainer}>

                <Text>Acepta Términos</Text>

                <Switch value={aceptaTerminos}
                    onValueChange={setAceptaTerminos} />
            </View>

            <View style={styles.switchContainer}>
                <Text>Suscribirse al newsletter</Text>
                <Switch value={suscripcion} onValueChange={setSuscripcion} />
            </View>

            <Button title="Registrarse" onPress={registrar} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#19c8ab",
        flexGrow: 1,
        justifyContent: "center",
    },
    titulo: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#a4a4a2",
        padding: 10,
        marginVertical: 6,
        borderRadius: 10,
        fontSize: 20,
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 15,
    },
});
