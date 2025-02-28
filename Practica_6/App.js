import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Switch } from 'react-native';

export default function App() {
  const [pet, setPet] = useState(null);
  const [name, setName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const pets = [
    { id: 1, name: 'Perro', image: require('./assets/perro.png') },
    { id: 2, name: 'Gato', image: require('./assets/gato.jpg') },
    { id: 3, name: 'Pájaro', image: require('./assets/pajaro.jpg') },
  ];

  const handlePetSelection = (selectedPet) => {
    setPet(selectedPet);
  };

  const handleBackgroundColorChange = () => {
    const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Selector de Mascotas</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.subtitle}>Selecciona tu mascota favorita:</Text>
      <View style={styles.petContainer}>
        {pets.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={[styles.petButton, pet?.id === p.id && styles.selectedPet]}
            onPress={() => handlePetSelection(p)}
          >
            <Image source={p.image} style={styles.petImage} />
            <Text style={styles.petName}>{p.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.switchContainer}>
        <Text>¿Habilitar notificaciones?</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <TouchableOpacity style={styles.colorButton} onPress={handleBackgroundColorChange}>
        <Text style={styles.colorButtonText}>Cambiar Color de Fondo</Text>
      </TouchableOpacity>

      {pet && (
        <Text style={styles.resultText}>
          {name ? `${name}, tu mascota favorita es un ${pet.name}` : `Tu mascota favorita es un ${pet.name}`}
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  petContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  petButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedPet: {
    borderColor: 'blue',
    backgroundColor: '#e6f3ff',
  },
  petImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  petName: {
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  colorButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});