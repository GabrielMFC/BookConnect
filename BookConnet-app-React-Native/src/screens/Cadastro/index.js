import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";
import CadastroStyle from "./CadastroCss";
import { useState } from "react";
const TelaDeCadastro = () => {
  const [Usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });
  return (
    <View style={CadastroStyle.centralizarFlexi}>
      <ImageBackground
        style={CadastroStyle.ImagemDeFundo}
        source={require("../../../assets/Imagens/TelaDeCadastro.png")}
      >
        <Text style={CadastroStyle.TituloLogin}>Cadastro</Text>

        <View
          style={{
            width: "80%",
            height: "6%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "10%",
            margin: "5%",
          }}
        >
          <TextInput
            placeholder="Digite seu e-mail"
            style={CadastroStyle.input}
          ></TextInput>
          <Image
            style={CadastroStyle.iconDentroDoInput}
            source={require("../../../assets/Icones/IconEmail.png")}
          ></Image>
        </View>

        <View
          style={{
            width: "80%",
            height: "6%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "10%",
            margin: "5%",
          }}
        >
          <TextInput
            placeholder="Digite sua senha"
            style={CadastroStyle.input}
          ></TextInput>
          <Image
            style={CadastroStyle.iconDentroDoInput}
            source={require("../../../assets/Icones/IconSenha.png")}
          ></Image>
        </View>

        <TouchableHighlight underlayColor="blue" style={CadastroStyle.botoes}>
          <View style={CadastroStyle.div}>
            <Text style={CadastroStyle.TextoDentroDoBotao}>Criar conta</Text>
          </View>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
};
export default TelaDeCadastro;
