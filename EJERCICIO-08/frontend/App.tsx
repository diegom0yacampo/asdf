import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const API_URL = 'http://localhost:3000';

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  emoji: string;
};

export default function App() {
  const [productos, setProductos] = useState<Producto[]>([]);

  const cargarProductos = async () => {
    const respuesta = await fetch(API_URL + '/productos');
    setProductos(await respuesta.json());
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>{item.precio} €</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, paddingHorizontal: 16 },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 14,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  emoji: { fontSize: 24 },
  nombre: { flex: 1, fontSize: 16, fontWeight: '600' },
  precio: { fontSize: 16 },
});