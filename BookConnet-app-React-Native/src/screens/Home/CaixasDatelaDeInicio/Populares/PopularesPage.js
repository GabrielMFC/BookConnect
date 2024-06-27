import { View, Text, TouchableHighlight } from "react-native";
import { Livros } from "../../Home";
import popularStyles from "./PopularesCss";
import BoxDosLivros from "./Livros";
const LivrosPopulares = ({ navigation }) => {
  return (
    <View style={popularStyles.body}>
      <Text style={popularStyles.nomeDaPagina}>Livros populares</Text>
      <View style={popularStyles.Cabecalho}></View>
      <BoxDosLivros navigation={navigation} />
    </View>
  );
};
export default LivrosPopulares;
