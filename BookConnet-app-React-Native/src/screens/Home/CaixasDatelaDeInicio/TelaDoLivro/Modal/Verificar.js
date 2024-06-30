import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from "react-native";
import VerificarStyles from "./Verificarcss";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../../Context/userData";
import Comprar from "./ModalDeVerificar/Compra";
const ModalDeVerificar = () => {
  const [Value, setValue] = useState("");
  const { senha, Modal, setModal } = useContext(AuthContext);
  const [efeitoInput, setEfeitoInput] = useState(false);
  return (
    <View style={VerificarStyles.body}>
      <View style={VerificarStyles.Modal}>
        <Text style={VerificarStyles.Titulo}>Digite sua senha</Text>

        <TouchableHighlight
          style={VerificarStyles.BotaoDeVoltar}
          onPress={() => setModal(false)}
        >
          <Image
            source={require("../../../../../../assets/Icones/back.png")}
            style={{ position: "absolute", width: 25, height: 25 }}
          />
        </TouchableHighlight>

        <TextInput
          onFocus={() => setEfeitoInput(!efeitoInput)}
          onChangeText={(text) => setValue(text)}
          value={Value}
          style={VerificarStyles.input}
          placeholder={
            efeitoInput
              ? (placeholder = "")
              : (placeholder = "Digite sua senha...")
          }
          placeholderTextColor={"gray"}
        ></TextInput>

        <TouchableOpacity
          activeOpacity={1}
          style={[
            VerificarStyles.BotaoDeVerificar,
            Value.length >= 5 ? { backgroundColor: "black" } : null,
          ]}
          onPress={() => {
            Value == senha && Modal == true
              ? setModal("compra")
              : alert("Senha incorreta");
          }}
        >
          <Text
            style={[
              {
                width: "100%",
                textAlign: "center",
                fontSize: 18,
                color: "black"
              },
              Value.length >= 5 ? { color: "white", fontWeight: "bold" } : null,
            ]}
          >
            Verificar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ModalDeVerificar;
