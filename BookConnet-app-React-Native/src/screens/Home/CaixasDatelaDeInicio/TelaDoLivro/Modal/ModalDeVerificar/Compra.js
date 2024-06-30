import { View, Text, Image, TouchableHighlight } from "react-native";
import CompraStyles from "./CompraCss";
import { AuthContext } from "../../../../../../Context/userData";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext, } from "react";
import { Livros } from "../../../../Home";
const Comprar = ({ route, navigation }) => {
  const Navigation = useNavigation()
  const context = useContext(AuthContext)
  const { Modal, setModal } = useContext(AuthContext);
  const setLivros = context.setLivros
  const livros = context.livros

  const { nome, autor, preco, capa, descricao } = route.params;
  return (
    <View style={CompraStyles.body}>
      <View style={CompraStyles.Modal}>
        <Text style={CompraStyles.Titulo}>{nome}</Text>
        <View style={CompraStyles.CaixadeTexto}>
          <Text style={CompraStyles.Texto}> {autor}</Text>
          <Text style={CompraStyles.Texto}>Valor: R${preco}</Text>
        </View>
        <Image style={CompraStyles.capa} source={capa} />
        
        <TouchableHighlight style={CompraStyles.BotaoDeComprar} onPress={() => {setLivros([...livros,  {Nome: nome, Autor: autor, Capa: capa} ]), setModal(!Modal) ,Navigation.navigate("Home")}}>

          <View style={CompraStyles.posicionarElementosNoBotaoDeComprar}>
            <Image
              style={{
                position: "absolute",
                width: 40,
                height: 40,
                left: "5%",
              }}
              source={require("../../../../../../../assets/Icones/IconDeCesta.png")}
            />
            <Text style={CompraStyles.TextoDentroDoBotaoDecomprar}>
              Comprar
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};
export default Comprar;
