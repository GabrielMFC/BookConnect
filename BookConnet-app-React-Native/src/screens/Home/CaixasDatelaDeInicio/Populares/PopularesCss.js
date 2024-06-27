import { StyleSheet } from "react-native";
const popularStyles = StyleSheet.create({
  body: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.888)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Cabecalho: {
    position: "absolute",
    width: "100%",
    top: "0%",
    height: 60,
    backgroundColor: "white",
  },
  nomeDaPagina: {
    position: "relative",
    width: "100%",
    top: "15%",
    marginLeft: "10%",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});
export default popularStyles;
