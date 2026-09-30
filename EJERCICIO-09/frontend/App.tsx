import { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const API_URL = 'http://localhost:3000';

type Heroe = {
  id: number;
  nombre: string;
  poder: string;
  universo: string;
};

export default function App() {
  const [id, setId] = useState('');
  const [heroe, setHeroe] = useState<Heroe | null>(null);

  const buscarHeroe = async () => {
    const respuesta = await fetch(API_URL + '/heroes/' + id);
    const datos = await respuesta.json();
    setHeroe(datos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID del héroe (1, 2, 3...)"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />
      <Button title="Buscar" onPress={buscarHeroe} />

      {heroe && (
        <View style={styles.ficha}>
          <Text style={styles.nombre}>{heroe.nombre}</Text>
          <Text>Poder: {heroe.poder}</Text>
          <Text>Universo: {heroe.universo}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12, justifyContent: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  ficha: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    gap: 4,
  },
  nombre: { fontSize: 20, fontWeight: '700' },
});