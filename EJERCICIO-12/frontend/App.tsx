import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const API_URL = 'http://localhost:3000';

type Criatura = {
  id: number;
  nombre: string;
  tipo: string;
  emoji: string;
  likes: number;
};

export default function App() {
  const [criaturas, setCriaturas] = useState<Criatura[]>([]);
  const [id, setId] = useState('');
  const [seleccionada, setSeleccionada] = useState<Criatura | null>(null);

  const cargarCriaturas = async () => {
    const respuesta = await fetch(API_URL + '/criaturas');
    setCriaturas(await respuesta.json());
  };

  const buscarCriatura = async () => {
    const respuesta = await fetch(API_URL + '/criaturas/' + id);
    setSeleccionada(await respuesta.json());
  };

  const darLike = async () => {
    if (!seleccionada) return;
    const respuesta = await fetch(
      API_URL + '/criaturas/' + seleccionada.id + '/like',
      { method: 'PATCH' },
    );
    const actualizada = await respuesta.json();
    setSeleccionada(actualizada);
    cargarCriaturas();
  };

  useEffect(() => {
    cargarCriaturas();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Creature Lab</Text>

      <FlatList
        data={criaturas}
        keyExtractor={(item) => String(item.id)}
        style={styles.lista}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.emoji} {item.nombre} · ❤️ {item.likes}
          </Text>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="ID de la criatura (1, 2, 3...)"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />
      <Button title="Buscar" onPress={buscarCriatura} />

      {seleccionada && (
        <View style={styles.ficha}>
          <Text style={styles.nombre}>
            {seleccionada.emoji} {seleccionada.nombre}
          </Text>
          <Text>Tipo: {seleccionada.tipo}</Text>
          <Text>❤️ {seleccionada.likes}</Text>
          <Button title="Me gusta" onPress={darLike} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 10 },
  titulo: { fontSize: 24, fontWeight: '700', textAlign: 'center' },
  lista: { maxHeight: 150 },
  item: { fontSize: 16, paddingVertical: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  ficha: {
    marginTop: 10,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    gap: 6,
  },
  nombre: { fontSize: 20, fontWeight: '700' },
});