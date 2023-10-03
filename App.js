import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Constants  from 'expo-constants';

export default function App() {
  const [todos, setTodos]=useState(
    [{key:'foo', description:'Testings'}]
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>To do's</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter new task'></TextInput>
      <Flatlist
        data={todos}
        renderItem={({item})=>
        <Text>{item.description}</Text>}></Flatlist>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize: 24,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  input:{
    backgroundColor: '#f0f0f0',
    borderColor: '#fafafa',
    height: 40,
    margin: 8
  },
  list: {
    margin: 8
  }
});
