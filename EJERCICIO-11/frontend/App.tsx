import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

const API_URL = 'http://localhost:3000';

type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

export default function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const cargarProductos = async () => {
    const respuesta = await fetch(API_URL + '/productos');
    setProductos(await respuesta.json());
  };

  const anadirProducto = async () => {
    await fetch(API_URL + '/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio: Number(precio) }),
    });
    setNombre('');
    setPrecio('');
    cargarProductos();
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
          <Text style={styles.item}>
            {item.nombre} · {item.precio} €
          </Text>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        keyboardType="numeric"
        value={precio}
        onChangeText={setPrecio}
      />
      <Button title="Añadir" onPress={anadirProducto} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 10 },
  item: { fontSize: 16, paddingVertical: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});