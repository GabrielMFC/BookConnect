import { View, Text, Image } from "react-native";
import Usuario from "./CirculoComFoto/Usuario";
import ItensDasRotas from "./DrawerCustomizado.js/ItensDasRotas";

const DrawerCustom = ({ ...props }) => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        position: "relative",
      }}
    >
      <Usuario style={{ position: "relative", margin: "5%" }} />
      <ItensDasRotas {...props} />
    </View>
  );
};
export default DrawerCustom;
