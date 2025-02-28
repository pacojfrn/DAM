import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/base';

export default function App() {
  
  const [items, setItems] = useState([{ id: 1, title: "Leche", checked: false },]);

  const [newItem, setNewItem] = useState("");
  
  const addItem = () => {
    setItems([...items, { id: Date.now(), title: newItem, checked: false }]);
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Nombre del articulo' value={newItem} onChangeText={setNewItem} style={styles.input}/>
        <Button title="Añadir" style={styles.Button} onPress={addItem}/>
      </View>
      <View style={styles.checkboxContainter}>
        <ScrollView>
          <View style={styles.bodyContent}>
          {items.map((item) => (
                <CheckBox
                  key={item.id}
                  title={item.title}
                  containerStyle={styles.CheckBox}
                  checked={item.checked}
                  onPress={() =>
                    setItems(items.map(i => i.id === item.id ? { ...i, checked: !i.checked } : i))
                  }
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAB1E3'
  },
  inputContainer: {
    display: 'flex',
    flexDirection:'column',
    marginTop: '20%',
    marginBottom: '10%',
    height: '10%',
    width: '100%',
    alignItems:'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  bodyContent: {
    width: '100%'
  },
  CheckBox: {
    backgroundColor: '#f3f2ef',
    borderRadius: 5
  },
  checkboxContainter:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: { 
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: '2%'
  },
  Button:{
    color: '#2A84FA'
  }
});
