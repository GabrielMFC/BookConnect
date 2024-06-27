import { StyleSheet } from "react-native";
const CabecalhoStyles = StyleSheet.create({
  centralizarFlexi: {
    width: "100%",
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconeDeCarrinho: {
    position: "relative",
    width: 30,
    height: 30,
  },
  barraDePesquisa: {
    position: "relative",
    width: 300,
    margin: "5%",
  },
  hitBoxDoIconeDeCarro: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    borderTopLeftRadius: 0,
    position: "relative",
  },
});
export default CabecalhoStyles;
