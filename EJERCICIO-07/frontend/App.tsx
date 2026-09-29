import { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

const API_URL = 'http://localhost:3000';

export default function App() {
  const [mensaje, setMensaje] = useState('Sin conectar');
  const [conectado, setConectado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const cargarMensaje = async () => {
    setCargando(true);
    const respuesta = await fetch(API_URL + '/mensaje');
    const datos = await respuesta.json();
    setMensaje(datos.texto);
    setConectado(true);
    setCargando(false);
  };

  useEffect(() => {
    cargarMensaje();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.estado}>{conectado ? '🟢' : '🔴'}</Text>
      <Text style={styles.texto}>
        {cargando ? 'Cargando…' : mensaje}
      </Text>
      <Button title="Recargar" onPress={cargarMensaje} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 },
  estado: { fontSize: 40 },
  texto: { fontSize: 18 },
});