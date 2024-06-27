import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import TelaDoLivroStyles from "./TelaDoLivrocss";
import {
  useFonts,
  CedarvilleCursive_400Regular,
} from "@expo-google-fonts/cedarville-cursive";
import { useNavigation } from "@react-navigation/native";
import ModalDeVerificar from "./Modal/Verificar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Context/userData";
import Comprar from "./Modal/ModalDeVerificar/Compra";

const PaginaDoLivro = ({ route }) => {
  const { Modal, setModal } = useContext(AuthContext);
  const { nome, autor, preco, capa, descricao } = route.params;
  const [fonteEscrita] = useFonts({
    CedarvilleCursive_400Regular,
  });
  const Navigation = useNavigation();
  const [MostrarModal, SetMostrarModal] = useState(false);
  if (!fonteEscrita) {
    return null;
  }
  return (
    <ImageBackground
      source={capa}
      style={TelaDoLivroStyles.fundo}
      blurRadius={25}
    >
      <View style={TelaDoLivroStyles.caixaDeinformacao}>
        <View style={TelaDoLivroStyles.caixaDaCapa}>
          <Image source={capa} style={TelaDoLivroStyles.capa} />
        </View>
      </View>

      <View style={TelaDoLivroStyles.containerDeTexto}>
        <Image
          style={TelaDoLivroStyles.imagemAntiga}
          source={require("../../../../../assets/Imagens/PapelMedieval-removebg.png")}
        />
        <View style={TelaDoLivroStyles.CaixaDeTexto}>
          <Text style={TelaDoLivroStyles.nome}>{nome}</Text>
          <Text style={TelaDoLivroStyles.autor}>By: {autor}</Text>
          <View style={TelaDoLivroStyles.LinhaPreta}></View>
          <Text style={TelaDoLivroStyles.preco}>R${preco}</Text>
        </View>
      </View>

      <View style={TelaDoLivroStyles.CaixaDeDescricao}>
        <Text style={TelaDoLivroStyles.descricao}>{descricao}</Text>
      </View>

      <View style={TelaDoLivroStyles.SecaoDeBotoes}>
        <TouchableHighlight
          style={TelaDoLivroStyles.BotaoDeVoltar}
          onPress={() => Navigation.navigate("LivrosPopulares")}
        >
          <Image
            style={TelaDoLivroStyles.ImagemDoBotao}
            source={require("../../../../../assets/Icones/back.png")}
          />
        </TouchableHighlight>

        <TouchableHighlight
          style={TelaDoLivroStyles.BotaoDeComprar}
          onPress={() => {
            setModal(!Modal);
          }}
        >
          <View style={TelaDoLivroStyles.posicionarElementosNoBotaoDeComprar}>
            <Image
              style={{
                position: "absolute",
                width: 40,
                height: 40,
                left: "5%",
              }}
              source={require("../../../../../assets/Icones/IconDeCesta.png")}
            />
            <Text style={TelaDoLivroStyles.TextoDentroDoBotaoDecomprar}>
              Comprar
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={TelaDoLivroStyles.BotaoHome}
          onPress={() => Navigation.navigate("Home")}
        >
          <Image
            style={TelaDoLivroStyles.ImagemDoBotao}
            source={require("../../../../../assets/Icones/home.png")}
          />
        </TouchableHighlight>
      </View>
      {Modal == true ? (
        <ModalDeVerificar route={route} />
      ) : Modal == "compra" ? (
        <Comprar route={route} />
      ) : null}
    </ImageBackground>
  );
};
export default PaginaDoLivro;
