import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
} from "react-native";
import { useContext, useState } from "react";
import styles from "./LoginCss";
import { AuthContext } from "../../Context/userData";
import Input from "./Input";

const TelaDeLogin = ({ navigation }) => {
  const [usuarioState, setUsuarioState] = useState({
    Email: "",
    Senha: "",
    Nome: ""
  })
  const { setEmail } = useContext(AuthContext);
  const { setSenha } = useContext(AuthContext);
  const { setNome } = useContext(AuthContext)
  var verificar = false;
  function VerificarLogin() {
    if (
      !usuarioState.Email.includes("@") ||
      usuarioState.Email.split("@").length - 1 > 1 ||
      !usuarioState.Email.includes(".") ||
      usuarioState.Email.split(".").length - 1 > 1 ||
      !usuarioState.Email.includes("com")
    ) {
      alert("E-mail inválido!");
      return;
    }
    if (usuarioState.Senha.length < 5) {
      alert("Senha muito curta, o tamanho mínimo é de 5 caracteres.");
      return;
    }
    verificar = true;
    if (verificar) {
      setNome(usuarioState.Nome)
      setEmail(usuarioState.Email);
      setSenha(usuarioState.Senha);
      navigation.navigate("Home");
    }
  }
  return (
    <View style={styles.centralizarFlexi}>
      <ImageBackground
        style={styles.ImagemDeFundo}
        source={require("../../../assets/Imagens/BackgroundBilioteca.jpeg")}
        blurRadius={20}
      >
        <View style={styles.caixaCinza}>
          <View style={styles.caixaPreta}>

            <Image style={styles.imagemDePerfil} source={require("../../../assets/Imagens/profile-user.png")}/>

            <View value={usuarioState.Nome} style={styles.centralizarInputFlex}>
        <TextInput value={usuarioState.Nome}  placeholder="Nome: " placeholderTextColor={"gray"} style={styles.Input} onChangeText={(value) => setUsuarioState((prevState) => ({
          ...prevState,
          Nome: value
        }))}></TextInput>
        <View style={styles.LinhaBrancaEmbaixoDoInput}></View>
        </View>

        <View style={styles.centralizarInputFlex}>
        <TextInput value={usuarioState.Email} placeholder="@Email: " placeholderTextColor={"gray"} style={styles.Input} onChangeText={(value) => setUsuarioState((prevState) => ({
          ...prevState,
          Email: value
        }))}></TextInput>
        <View style={styles.LinhaBrancaEmbaixoDoInput}></View>
        </View>

        <View style={styles.centralizarInputFlex}>
        <TextInput value={usuarioState.Senha} placeholder="Senha: " placeholderTextColor={"gray"} style={styles.Input} onChangeText={(value) => setUsuarioState((prevState) => ({
          ...prevState,
          Senha: value
        }))}></TextInput>
        <View style={styles.LinhaBrancaEmbaixoDoInput}></View>
        </View>

            <TouchableHighlight onPress={() => VerificarLogin()} style={styles.botaoDeEntrar}><Text style={{color: "white", width: "100%", textAlign: "center", fontSize: 25}}>Entrar</Text></TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default TelaDeLogin;
