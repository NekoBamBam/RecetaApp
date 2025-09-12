import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu correo"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Guardar" onPress={() => alert(`Guardado:\n${name} - ${email}`)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F29325",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#D94F04",
    padding: 10,
    borderRadius: 8,
    marginTop: 32
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});
