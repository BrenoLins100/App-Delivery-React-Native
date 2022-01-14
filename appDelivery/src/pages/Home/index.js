import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/styles.js";
import Feather from "react-native-vector-icons/Feather";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";

export default function App({ navigation }) {
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  const fontes = {
    mr200: "Manrope_200ExtraLight",
    mr300: "Manrope_300Light",
    mr400: "Manrope_400Regular",
    mr500: "Manrope_500Medium",
    mr600: "Manrope_600SemiBold",
    mr700: "Manrope_700Bold",
  };

  const feed = [
    {
      id: "1",
      titulo: "Pizza",
      fundo: "#F5CA48",
      icone: "#FFF",
      corIcone: "#000",
      imagem: require("../../images/pizza-icon.png"),
    },
    {
      id: "2",
      titulo: "Seafood",
      fundo: "#FFFFFF",
      icone: "#F26C68",
      corIcone: "#FFF",
      imagem: require("../../images/shrimp-icon.png"),
    },
    {
      id: "3",
      titulo: "Soft Drinks",
      fundo: "#FFFFFF",
      icone: "#F26C68",
      corIcone: "#FFF",
      imagem: require("../../images/soda-icon.png"),
    },
    {
      id: "4",
      titulo: "Fried chicken",
      fundo: "#F5CA48",
      icone: "#FFF",
      corIcone: "#000",
      imagem: require("../../images/fried-chicken.png"),
    },
    {
      id: "5",
      titulo: "Noodles",
      fundo: "#FFFFFF",
      icone: "#F26C68",
      corIcone: "#FFF",
      imagem: require("../../images/noodles.png"),
    },
    {
      id: "6",
      titulo: "Fries",
      fundo: "#FFFFFF",
      icone: "#F26C68",
      corIcone: "#FFF",
      imagem: require("../../images/french-fries.png"),
    },
  ];

  const feed2 = [
    {
      id: "1",
      titulo: "Primavera Pizza",
      peso: "Weight 540 gr",
      fundo: "#FFFFFF",
      icone: "#F5CA48",
      corIcone: "#313234",
      imagem: require("../../images/pizza-view.png"),
    },
    {
      id: "2",
      titulo: "Primavera Pizza",
      peso: "Weight 540 gr",
      fundo: "#FFFFFF",
      icone: "#F5CA48",
      corIcone: "#313234",
      imagem: require("../../images/pizza-view.png"),
    },
    {
      id: "3",
      titulo: "Primavera Pizza",
      peso: "Weight 540 gr",
      fundo: "#FFFFFF",
      icone: "#F5CA48",
      corIcone: "#313234",
      imagem: require("../../images/pizza-view.png"),
    },
  ];

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F5CA48" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView>
            <View style={styles.menu}>
              <Feather name="user" size={25} color="#000" />
              <Feather name="menu" size={25} color="#000" />
            </View>
          </SafeAreaView>

          <View style={styles.texto}>
            <Text
              style={{
                fontFamily: fontes.mr400,
                fontSize: 16,
                color: "#313234",
              }}
            >
              Food
            </Text>
            <Text
              style={{
                fontFamily: fontes.mr700,
                fontSize: 32,
                color: "#313234",
              }}
            >
              Delivery
            </Text>
          </View>

          <View style={styles.pesquisa}>
            <Feather style={{ flex: 1 }} name="search" size={20} color="#000" />
            <TextInput
              style={[
                styles.barraPesquisa,
                { fontFamily: fontes.mr600, fontSize: 14 },
              ]}
              placeholder="Search..."
              placeholderTextColor="#CDCDCD"
            />
          </View>

          <View style={styles.categoria}>
            <Text style={{ fontFamily: fontes.mr700, fontSize: 16 }}>
              Categories
            </Text>
          </View>

          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={feed}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={[{ backgroundColor: item.fundo }, styles.box]}>
                  <Image style={styles.imagemComida} source={item.imagem} />
                  <Text
                    style={[
                      {
                        fontFamily: fontes.mr600,
                        fontSize: 14,
                        color: "#313234",
                      },
                    ]}
                  >
                    {item.titulo}
                  </Text>

                  <View
                    style={[styles.verMais, { backgroundColor: item.icone }]}
                  >
                    <Feather
                      name="chevron-right"
                      size={15}
                      color={item.corIcone}
                    />
                  </View>
                </View>
              )}
            />
          </View>

          <View style={styles.popular}>
            <Text style={{ fontFamily: fontes.mr700, fontSize: 16 }}>
              Popular
            </Text>

            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={feed2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={[{ backgroundColor: item.fundo }, styles.box2]}>
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 22,
                        marginTop: 22,
                        alignItems: "center",
                      }}
                    >
                      <Feather name="star" size={15} color="#F5CA48" />
                      <Text
                        style={[
                          {
                            fontFamily: fontes.mr600,
                            fontSize: 14,
                            color: "#313234",
                          },
                        ]}
                      >
                        top of the week
                      </Text>
                    </View>

                    <Image style={styles.imagemPopular} source={item.imagem} />

                    <View style={{ padding: 22 }}>
                      <Text
                        style={[{ fontFamily: fontes.mr600, fontSize: 14 }]}
                      >
                        {item.titulo}
                      </Text>
                      <Text
                        style={[
                          {
                            fontFamily: fontes.mr500,
                            fontSize: 14,
                            color: "#C4C4C4",
                          },
                        ]}
                      >
                        {item.peso}
                      </Text>
                    </View>

                    <View
                      style={[styles.verMais2, { backgroundColor: item.icone }]}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Detalhes");
                        }}
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                      >
                        <Feather name="plus" size={15} color={item.corIcone} />
                      </TouchableOpacity>
                    </View>

                    <View
                      style={[
                        styles.avaliacao,
                        {
                          flexDirection: "row",
                          marginLeft: 22,
                          marginTop: 22,
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Feather name="star" size={12} color="#000" />
                      <Text
                        style={[{ fontFamily: fontes.mr600, fontSize: 12 }]}
                      >
                        5.0
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
