import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import styles from "./HomeCss";
import Cabecalho from "../../components/CabeçalhoHome/Cabeçalho/Cabecalho";
export const Livros = [
  {
    id: 0,
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    capa: require("../../../assets/Imagens/o_hobbit.jpg"),
    preco: 29.99,
    descricao:
      " Bilbo Bolseiro é um hobbit que leva uma vida confortável e sem ambições, raramente aventurando-se para além de sua despensa ou sua adega. Mas seu contentamento é perturbado quando Gandalf, o mago, e uma companhia de anões batem em sua porta e levam-no para uma expedição. ",
    popular: true,
  },
  {
    id: 1,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    capa: require("../../../assets/Imagens/harry_potter.jpg"),
    preco: 39.99,
    descricao:
      " A narrativa que inicia a saga Harry Potter conta a história de um menino bruxo que fica órfão, depois que o vilão Voldemort assassina seus pais a sangue frio. O garoto se torna uma lenda no mundo mágico por ter sobrevivido ao feitiço mortal apenas com uma cicatriz na testa, mesmo sendo apenas um bebê. ",
    popular: true,
  },
  {
    id: 2,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    capa: require("../../../assets/Imagens/harry_potter.jpg"),
    preco: 39.99,
    descricao:
      " A narrativa que inicia a saga Harry Potter conta a história de um menino bruxo que fica órfão, depois que o vilão Voldemort assassina seus pais a sangue frio. O garoto se torna uma lenda no mundo mágico por ter sobrevivido ao feitiço mortal apenas com uma cicatriz na testa, mesmo sendo apenas um bebê. ",
    popular: true,
  },
  {
    id: 3,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    capa: require("../../../assets/Imagens/harry_potter.jpg"),
    preco: 39.99,
    descricao:
      " A narrativa que inicia a saga Harry Potter conta a história de um menino bruxo que fica órfão, depois que o vilão Voldemort assassina seus pais a sangue frio. O garoto se torna uma lenda no mundo mágico por ter sobrevivido ao feitiço mortal apenas com uma cicatriz na testa, mesmo sendo apenas um bebê. ",
    popular: true,
  },
];

const PaginaInicial = ({ navigation }) => {
  const [LivroAleatorio, SetLivroAleatorio] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      SetLivroAleatorio(Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.body}>
      <Cabecalho />
      <TouchableHighlight
        onPress={() => navigation.navigate("LivrosPopulares")}
      >
        <View style={styles.container2}>
          <View style={styles.containerDoLivro}>
            <Image
              source={Livros[LivroAleatorio].capa}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 30,
              }}
              blurRadius={25}
            />
            <Image
              source={Livros[LivroAleatorio].capa}
              style={[styles.capa, styles.livro2]}
            />
            <View style={styles.ViewTexto}>
              <Text style={styles.TextoDoLivro}>
                {Livros[LivroAleatorio].titulo}
              </Text>
              <Text style={styles.TextoDoLivro}>
                {Livros[LivroAleatorio].autor}
              </Text>
              <Text style={styles.TextoDoLivro}>
                {Livros[LivroAleatorio].preco}
              </Text>
            </View>
          </View>

          <Text style={styles.nomeDaCaixa}>Livros populares</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default PaginaInicial;
