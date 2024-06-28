import { StyleSheet } from "react-native";
const PerfilStyle = StyleSheet.create({
    centralizarFlexi:{
        width: "100%", 
        height: "100%", 
        backgroundColor: "rgb(49, 49, 49)"
    },
    FaixaAzul:{
        width: "100%", 
        height: "25%", 
        backgroundColor: "rgb(21, 139, 189)", alignItems: "center",
        elevation: 5
    },
    ImagemDoUsuario: {
        width: 200, 
        height: 200, 
        position: "relative",
        top: "45%",
        elevation: 5
    },
    centralizarTexto: {
        position: "absolute",
        top: "38%",
        width: "95%", 
        height: "40%", 
        display: "flex", 
        alignItems: "center",
    },
    centralizarBotaoDeCoisasFlexi:{
        position: "absolute",
        width: "100%",
        height: "20%",
        top: "60%",
        display: "flex",
        display: "flex",
        alignItems: "center",
    },
    BotaoDecoisas: {
        position: "absolute",
        width: "70%",
        height: "50%",
        backgroundColor: "rgb(184, 184, 184)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        elevation: 5
    },
    TextoDentroDoBotao:{
        position: "absolute",
        fontSize: 30,
    }
})
export default PerfilStyle