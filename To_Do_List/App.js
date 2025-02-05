import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/base';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>
          To-Do-List
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <Text style={styles.titleTextBody}>Lista de compras</Text>
        </View>
      <ScrollView>
        <View style={styles.bodyContent}>
          <CheckBox title="Leche" containerStyle={styles.CheckBox} checked = {true}/>
          <CheckBox title="Pan" containerStyle={styles.CheckBox}/>
          <CheckBox title="Huevos" containerStyle={styles.CheckBox}/>
          <CheckBox title="Jamon" containerStyle={styles.CheckBox}/>
          <CheckBox title="Queso" containerStyle={styles.CheckBox}/>
          <CheckBox title="Cereal" containerStyle={styles.CheckBox}/>
          <CheckBox title="Frutas" containerStyle={styles.CheckBox}/>
          <CheckBox title="Verduras" containerStyle={styles.CheckBox}/>
          <CheckBox title="Carne" containerStyle={styles.CheckBox}/>
          <CheckBox title="Pollo" containerStyle={styles.CheckBox}/>
          <CheckBox title="Huevos" containerStyle={styles.CheckBox}/>
          <CheckBox title="Jamon" containerStyle={styles.CheckBox}/>
          <CheckBox title="Queso" containerStyle={styles.CheckBox}/>
          <CheckBox title="Cereal" containerStyle={styles.CheckBox}/>
          <CheckBox title="Frutas" containerStyle={styles.CheckBox}/>
          <CheckBox title="Verduras" containerStyle={styles.CheckBox}/>
        </View>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navbar:{
    backgroundColor: '#797',
    height: '10%',
    width: '100%',
    marginTop: 0,
    textAlign: 'justify',
    justifyContent: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: '10%'
  },
  body: {
    height: '90%',
    maxWidth: '100%',
    backgroundColor: '#f3f2ef'
  },
  textContainer: {
    height:'10%',
    width: '100%',
    alignItems: 'center',
    justifyContent:'center'
  },
  titleTextBody:{
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  },
  bodyContent: {
    width: '100%'
  },
  CheckBox: {
    backgroundColor: '#f3f2ef',
    width: '50%',
    marginLeft: '20%'
  }
});
