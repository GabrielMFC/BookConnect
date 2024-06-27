import { View, TextInput } from "react-native"
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/userData";
const Input = (props) => {
const { setSenha } = useContext(AuthContext);
const [Nome, setNome] = useState("")
// const [Email, setEmail] = useState("")
const [senhaState, setSenhaState] = useState("")
function Validar () {
  setSenhaState(senhaState) 
  setSenha(senhaState)
}
    return(
<></>
    )
}
export default Input