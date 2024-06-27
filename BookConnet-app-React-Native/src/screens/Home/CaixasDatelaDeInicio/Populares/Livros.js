import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { Livros } from "../../Home";
import { StyleSheet } from "react-native";
const BoxDosLivros = ({ navigation }) => {
  return (
    <View style={style.body}>
      {Livros.filter((obj) => obj.popular).map((obj) => (
        <View key={obj.id} style={style.container}>
          <TouchableHighlight
            key={obj.id}
            style={style.botao}
            onPress={() =>
              navigation.navigate("PaginaDoLivro", {
                capa: obj.capa,
                nome: obj.titulo,
                autor: obj.autor,
                preco: obj.preco,
                descricao: obj.descricao,
              })
            }
          >
            <Image style={style.capa} source={obj.capa} />
          </TouchableHighlight>
        </View>
      ))}
    </View>
  );
};
const style = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: "40%",
    paddingLeft: "5%",
  },
  container: {
    position: "relative",
    width: "32%",
    height: "32%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    position: "absolute",
    width: "90%",
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  capa: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    elevation: 3,
  },
});
export default BoxDosLivros;
