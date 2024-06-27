import { StyleSheet } from "react-native";
const UsuarioStyle = StyleSheet.create({
  CentralizarFlexi: {
    width: 200,
    height: 200,
    position: "relative",
    top: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  CirculoDaFoto: {
    width: 150,
    height: 150,
    borderRadius: 100,
    position: "relative",
  },
  ImagemDaFoto: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  texto: {
    position: "relative",
    fontSize: 15,
    width: "100%",
    textAlign: "center",
    bottom: "0%",
    color: "white",
  },
});
export default UsuarioStyle;
