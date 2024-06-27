import { StyleSheet } from "react-native";
import Input from "./Input";
const styles = StyleSheet.create({
  centralizarFlexi: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  ImagemDeFundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  imagemDePerfil: {
    position: "relative",
    bottom: "3%"
  },
  caixaCinza: {
    position: "absolute",
    backgroundColor: "rgba(128, 128, 128, 0.2)",
    width: "70%",
    height: "70%",
    borderRadius: 30,
    borderTopLeftRadius: 0,
    elevation: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  caixaPreta: {
    position: "absolute",
    width: "85%",
    height: "92%",
    borderRadius: 30,
    borderTopRightRadius: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
  },
  centralizarInputFlex:{
    width: "85%",
    height: "5%",
    position: "relative",
    display: "flex",
    margin: "5%"
  },
  Input: {
    width: "85%",
    color: "white",
    textAlign: "left"
  },
  LinhaBrancaEmbaixoDoInput:{
    backgroundColor:"white",
    width: "100%",
    height: "5%",
    position: "relative"
  },
  botaoDeEntrar: {
    backgroundColor: "rgba(128, 128, 128, 0.5)", width: "80%", height: "10%", justifyContent: "center", alignItems: "center", elevation:5, marginTop: "5%"
  }
});
export default styles;
