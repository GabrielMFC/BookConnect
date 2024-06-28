import Usuario from "../../../../components/DrawerCustomizado/CirculoComFoto/Usuario";
import { View, Image, Text, TouchableHighlight } from "react-native";
import { Button } from "react-native-paper";
import { AuthContext } from "../../../../Context/userData";
import { useContext } from "react";
import PerfilStyle from "./PerfilCss";
import styles from "../../../Login/LoginCss";
const Perfil = () => {
  const {nome} = useContext(AuthContext) 
  const {email} = useContext(AuthContext) 
  return (
    <View style={PerfilStyle.centralizarFlexi}>
      <View style={PerfilStyle.FaixaAzul}>

      <Image source={require("../../../../../assets/Imagens/UserDoPerfil.png")} style={PerfilStyle.ImagemDoUsuario}/>
      </View>

      <View style={PerfilStyle.centralizarTexto}>
        <Text style={{
          width: "100%", 
          textAlign: "center", 
          fontSize: 30, 
          color: "white"}}>{nome}</Text>

        <Text style={{
          width: "100%", 
          textAlign: "center", 
          fontSize: 20, 
          color: "gray"}}>{email}</Text>
      </View>

      <View 
      style={PerfilStyle.centralizarBotaoDeCoisasFlexi}>
      <TouchableHighlight 
      style={PerfilStyle.BotaoDecoisas}>
        <Text 
        style={PerfilStyle.TextoDentroDoBotao}>Minhas coisas</Text>
        </TouchableHighlight>
      </View>

    </View>
  );
};
export default Perfil;
