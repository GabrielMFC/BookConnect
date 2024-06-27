import { View, Text, Image } from "react-native";
import UsuarioStyle from "./UsuarioCss";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/userData";
const Usuario = () => {
  const { nome } = useContext(AuthContext);
  return (
    <View>
      <View style={UsuarioStyle.CentralizarFlexi}>
        <View style={UsuarioStyle.CirculoDaFoto}>
          <Image
            style={UsuarioStyle.ImagemDaFoto}
            source={require("../../../../assets/Imagens/do-utilizador.png")}
          ></Image>
        </View>
        <Text style={UsuarioStyle.texto}>{nome}</Text>
      </View>
    </View>
  );
};
export default Usuario;
