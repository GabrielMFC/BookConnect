import { View, Image } from "react-native";
import CabecalhoStyles from "./CabecalhoCss";
import { Searchbar } from "react-native-paper";
const Cabecalho = () => {
  return (
    <View style={CabecalhoStyles.centralizarFlexi}>
      <Searchbar style={CabecalhoStyles.barraDePesquisa}></Searchbar>
      <View style={CabecalhoStyles.hitBoxDoIconeDeCarro}>
        <Image
          style={CabecalhoStyles.iconeDeCarrinho}
          source={require("../../../../assets/Icones/IconCarrinho.png")}
        ></Image>
      </View>
    </View>
  );
};
export default Cabecalho;
