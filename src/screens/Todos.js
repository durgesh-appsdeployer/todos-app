import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useGetTodoQuery } from '../redux/services';

export default function Todos() {
  const [data, setData] = useState([]);

  const state = useGetTodoQuery();

  if (state.isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity title="Upload File" style={styles.button} onPress={() => { setData(state.data) }}>
        <Text style={styles.buttonText}>Fetch Todos</Text>
      </TouchableOpacity>
      <View style={styles.scrollContainer}>
        <FlatList nestedScrollEnabled={true} data={data}
          renderItem={(item) => {
            return (<View key={item.item.id} style={item.item.completed ? styles.completeTodo : styles.incompleteTodo}><Text key={item.item.id} style={styles.todoText}>{item.item.title}</Text></View>)
          }} q
          keyExtractor={(item) => { item.index }}>
        </FlatList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    paddingTop: "20%"
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 20
  },
  buttonText: {
    color: "white",
    fontSize: 15
  },
  scrollContainer: {
    height: 600,
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgray",
    marginTop: 40,
    borderRadius: 5
  },
  incompleteTodo: {
    backgroundColor: "white",
    marginHorizontal: 7,
    marginVertical: 7,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 10,
    borderWidth: 1,
    borderColor: "lightgray"
  },
  completeTodo: {
    backgroundColor: "#b3f4cb",
    marginHorizontal: 7,
    marginVertical: 7,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 10,
    borderWidth: 1,
    borderColor: "lightgray"
  },
  todoText: {
    color: "gray"
  }
})