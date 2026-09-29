import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

const API_URL = 'http://localhost:3000';

export default function App() {
  const [mensaje, setMensaje] = useState('Sin conectar');

  const cargarMensaje = async () => {
    const respuesta = await fetch(API_URL + '/mensaje');
    const datos = await respuesta.json();
    setMensaje(datos.texto);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>{mensaje}</Text>
      <Button title="Conectar" onPress={cargarMensaje} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 },
  texto: { fontSize: 18 },
});