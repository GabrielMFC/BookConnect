import { View, Text, Image } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../../../Context/userData";
import Styles from "./Css";
const LivroDoCliente = ({capa}) => {
  return(
    <Image source={capa} style={Styles.Livro}></Image>
  )
}
const MeusLivros = () => {
  const context = useContext(AuthContext)
  const livros = context.livros
  return (
  <View style={Styles.centralizarFlexi}>
      {livros.map((livro, index) => (
        <LivroDoCliente key={index} capa={livro.Capa} />
      ))}
    </View>)
};
export default MeusLivros;
