import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { CORES } from "../../constants/cores";

const MeuBotton = (props) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={props.onPress} // Função chamada quando o botão é pressionado
        >
            <Text style={styles.text}>{props.value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: CORES.COR_PRIMARIA,
        padding: 10,
        width: '80%',
        borderRadius: 4,
        marginTop: 5,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700', // Ajustado para ser uma string
    }
})

export default MeuBotton;
