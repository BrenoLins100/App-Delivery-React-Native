import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "../../styles/styles.js";

import { ingredientes } from "../../assets/data/ingredientes.js";

import Feather from "react-native-vector-icons/Feather";

const caminhoImagem = require("../../images/pizza-view.png");

export default function Detalhes({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        
        <TouchableOpacity
          style={styles.btnVoltar}
          onPress={() => {
            navigation.goBack();
          }}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Feather name="chevron-left" size={15} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFavoritar}>
          <Feather name="star" size={15} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.descricao}>
        <Text style={styles.tituloPizza}>Primavera Pizza</Text>
        <Text style={styles.preco}>$5.99</Text>
      </View>
      <View style={styles.detalhes}>
        <Text style={styles.infoPizza}>Size</Text>
        <Text style={styles.infoPizza2}>Medium 14"</Text>

        <Text style={[styles.infoPizza, { marginTop: 20 }]}>Crust</Text>
        <Text style={styles.infoPizza2}>Thin Crust</Text>

        <Text style={[styles.infoPizza, { marginTop: 20 }]}>Delivery in</Text>
        <Text style={styles.infoPizza2}>30 min</Text>

        <Image style={styles.imagemPizza} source={caminhoImagem} />
      </View>
      <View style={styles.ingredientes}>
        <Text style={styles.textoIngrediente}>Ingredients</Text>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={ingredientes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.boxIngrediente}>
                <Image style={styles.imagemIngrediente} source={item.imagem} />
              </View>
            )}
          />
        </View>

        <View style={styles.fazerPedido}>
          <TouchableOpacity style={styles.btnPedido}>
            <Text style={styles.textoBtn}>Place an order</Text>
            <Feather
              style={{ marginTop: 3 }}
              name="chevron-right"
              color="#000"
              size={16}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
