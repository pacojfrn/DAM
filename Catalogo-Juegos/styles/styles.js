import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  body: {
    flex: 1, 
    padding: 10
  },
  card: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
    height: 255
  },
  image: {
    width: '90%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  year: {
    fontSize: 16,
    color: "#bbb",
  },
  sales: {
    fontSize: 16,
    color: '#bbb'
  },
  listContainer: {
    flex: 1, // Asegura que la lista tome el espacio necesario
  },
});
