import { StyleSheet, Text, View, FlatList } from 'react-native';
import api from './src/services/api';
import { useEffect, useState } from 'react';
import Filmes from './src/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState()

useEffect(()=>{

  async function loadFilmes(){
    const response = await api.get('r-api/?api=filmes')
    console.log(response.data)
    setFilmes(response.data)
  }

  loadFilmes();

},[]);

  return (
    <View style={styles.container}>
    <FlatList
      data={filmes}
      renderItem={({item})=>{<Filmes/>}}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
