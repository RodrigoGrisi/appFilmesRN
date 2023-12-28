import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";
import Detalhes from "../Detalhes";

export default function Filmes({ data }) {
  const [visibleModal, setvisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image source={{ uri: data.foto }}
          style={styles.capa}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.readBtn}
            onPress={() => setvisibleModal(true)}>
            <Text style={styles.textBtn}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>

        <Modal
          transparent={true} animationType="slide" visible={visibleModal}>
          <Detalhes filme={data} voltar={() => setvisibleModal(false)} />
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
  },
  capa: {
    height: 250,
    zIndex: 2,
  }, areaBtn: {
    alignItems: "flex-end",
    marginTop: -45,
    zIndex: 3,
  }, readBtn: {
    alignItens: 'center',
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textBtn: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  }
});