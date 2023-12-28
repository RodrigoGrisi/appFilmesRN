import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Detalhes(props) {
  return (
    <View style={styles.container}>

      <View style={styles.modalContainer}>

        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text style={{ color: '#fff', fontSize: 16, marginRight: 15 }}> Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{props.filme.sinopse}</Text>

        <Text>Detalhes do Filme</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRigth: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    width: '95%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    backgroundColor: '#E52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'flex-end',
  },
  titulo:{
    textAlign: 'center',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  sinopse:{
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 15,
  },
  descricao:{
    fontSize: 17,
    color: '#fff',
    marginLeft: 15,
    marginRight: 15
  }

})