import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  body: {
    backgroundColor: "rgba(0, 0, 0, 0.888)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: "0%",
  },
  Espacamente: {
    paddingTop: "10%",
  },
  container: {
    position: "relative",
    flexDirection: "row",
    marginTop: "15%",
    paddingLeft: "5%",
    height: 300,
    width: "90%",
    backgroundColor: "gray",
    display: "flex",
    alignItems: "center",
    paddingRight: 200,
    opacity: 0.5,
  },
  container2: {
    position: "relative",
    flexDirection: "row",
    marginTop: "15%",
    height: 300,
    width: "90%",
    backgroundColor: "rgba(128, 128, 128, 0.263)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    borderRadius: 30,
  },
  containerDoLivro: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "70%",
    width: "103%",
    top: "0%",
    left: "0%",
    backgroundColor: "yellow",
    borderTopLeftRadius: 5,
  },
  capa: {
    position: "relative",
    marginTop: "2%",
    backgroundColor: "white",
    width: 120,
    height: 190,
    right: "50%",
    elevation: 6,
    marginLeft: "2%",
  },
  ViewTexto: {
    position: "absolute",
    height: "90%",
    width: "50%",
    right: "5%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  TextoDoLivro: {
    color: "white",
    width: "100%",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    margin: "5%",
  },
  nomeDaCaixa: {
    width: "100%",
    height: "25%",
    fontSize: 30,
    marginLeft: "3%",
    color: "white",
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  titulo: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
  },
  autor: {
    fontSize: 16,
    marginBottom: 5,
    color: "black",
  },
  preco: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "black",
  },
});
export default styles;
