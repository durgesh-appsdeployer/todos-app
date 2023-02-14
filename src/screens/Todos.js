import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useGetTodoQuery } from '../redux/services';

export default function Todos() {
  const [data, setData] = useState([]);

  const state = useGetTodoQuery();

  if (state.isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ padding: "10%", paddingTop: "20%" }}>
      <TouchableOpacity title="Upload File" style={{ height: 50, width: "100%", backgroundColor: "green", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 20 }} onPress={() => { setData(state.data) }}>
        <Text style={{ color: "white", fontSize: 15 }}>Fetch Todos</Text>
      </TouchableOpacity>
      <View style={{ height: 600, width: "100%", borderWidth: 1, borderColor: "lightgray", marginTop: 40, borderRadius: 5 }}>
        <FlatList nestedScrollEnabled={true} data={data}
          renderItem={(item) => {
            console.log(item);
            return (<View key={item.item.id} style={{ backgroundColor: item.item.completed ? "#b3f4cb" : "white", marginHorizontal: 7, marginVertical: 7, borderRadius: 5, paddingHorizontal: 20, paddingVertical: 15, elevation: 10, borderWidth: 1, borderColor: "lightgray" }}><Text key={item.item.id} style={{ color: "gray" }}>{item.item.title}</Text></View>)
          }} q
          keyExtractor={(item) => { item.index }}>
        </FlatList>
      </View>
    </View>
  )
}