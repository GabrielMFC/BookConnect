import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";

const MeuInput = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>
                {props.label}
            </Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder} // Corrigido para 'placeHolder'
                secureTextEntry={props.comMascara} // Mantido conforme original
                onChangeText={props.onChangeText} // Adicionado para permitir o gerenciamento do texto
                value={props.value} // Adicionado para permitir o controle do valor do input
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#1A1A1A",
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: '100%', // Largura ajustada para 80% da tela
        borderRadius: 4,
        color: "#1a1a1a",
        fontSize: 22,
    }
});

export default MeuInput;
