import Usuario from "../../../../components/DrawerCustomizado/CirculoComFoto/Usuario";
import { View, Image } from "react-native";
import { Button } from "react-native-paper";
import * as React from "react";
const Perfil = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Button icon={"camera"} mode="contained"></Button>
      <Usuario />
    </View>
  );
};
export default Perfil;
