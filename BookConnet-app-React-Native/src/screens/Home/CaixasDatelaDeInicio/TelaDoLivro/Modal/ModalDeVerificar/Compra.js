import { View, Text, Image, TouchableHighlight } from "react-native";
import CompraStyles from "./CompraCss";
const Comprar = ({ route }) => {
  const { nome, autor, preco, capa, descricao } = route.params;
  return (
    <View style={CompraStyles.body}>
      <View style={CompraStyles.Modal}>
        <Text style={CompraStyles.Titulo}>{nome}</Text>
        <View style={CompraStyles.CaixadeTexto}>
          <Text style={CompraStyles.Texto}>Autor: {autor}</Text>
          <Text style={CompraStyles.Texto}>Valor: R${preco}</Text>
        </View>
        <Image style={CompraStyles.capa} source={capa} />

        <TouchableHighlight style={CompraStyles.BotaoDeComprar}>
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
