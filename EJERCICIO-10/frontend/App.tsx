import { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

const API_URL = 'http://localhost:3000';

type Mascota = {
  id: number;
  nombre: string;
  tipo: string;
  likes: number;
};

export default function App() {
  const [mascota, setMascota] = useState<Mascota | null>(null);

  const cargarMascota = async () => {
    const respuesta = await fetch(API_URL + '/mascotas/1');
    setMascota(await respuesta.json());
  };

  const darLike = async () => {
    const respuesta = await fetch(API_URL + '/mascotas/1/like', {
      method: 'PATCH',
    });
    setMascota(await respuesta.json());
  };

  useEffect(() => {
    cargarMascota();
  }, []);

  if (!mascota) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Cargando…</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nombre}>{mascota.nombre}</Text>
      <Text>{mascota.tipo}</Text>
      <Text style={styles.likes}>❤️ {mascota.likes}</Text>
      <Button title="Me gusta" onPress={darLike} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  nombre: { fontSize: 24, fontWeight: '700' },
  likes: { fontSize: 20 },
});