import { StyleSheet } from "react-native";
import { fontes } from "../assets/data/fontes.js";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9FB",
    flex: 1,
  },
  menu: {
    marginTop: 60,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texto: {
    padding: 20,
  },
  pesquisa: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  barraPesquisa: {
    borderBottomWidth: 2,
    borderBottomColor: "#CDCDCD",
    flex: 8,
  },
  categoria: {
    padding: 20,
  },
  box: {
    width: 105,
    height: 177,
    borderRadius: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imagemComida: {
    width: 60,
    height: 60,
  },
  verMais: {
    width: 26,
    height: 26,
    padding: 3,
    marginTop: 29,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  popular: {
    padding: 20,
    flex: 1,
  },
  box2: {
    marginTop: 11,
    borderRadius: 25,
    width: 335,
    height: 161,
    position: "relative",
    marginBottom: 20,
    alignSelf: "center",
    overflow: "hidden",
  },
  verMais2: {
    width: 90,
    height: 53,
    padding: 3,
    marginTop: 29,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
  },
  imagemPopular: {
    position: "absolute",
    right: 0,
    top: 18,
    width: 210,
    height: 125,
  },
  avaliacao: {
    position: "absolute",
    left: 75,
    bottom: 16,
  },

  /*Detalhes*/
  btnVoltar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#CDCDCD",
    alignItems: "center",
    justifyContent: "center",
  },
  btnFavoritar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F5CA48",
    alignItems: "center",
    justifyContent: "center",
  },
  descricao: {
    padding: 20,
    marginTop: 4,
  },
  tituloPizza: {
    fontFamily: fontes.mr700,
    fontSize: 32,
  },
  preco: {
    color: "#E4723C",
    fontFamily: fontes.mr600,
    fontSize: 32,
    marginTop: 20,
  },
  detalhes: {
    padding: 20,
    position: "relative",
  },
  infoPizza: {
    color: "#CDCDCD",
    fontFamily: fontes.mr500,
    fontSize: 14,
  },
  infoPizza2: {
    color: "#000",
    fontFamily: fontes.mr600,
    fontSize: 16,
    marginTop: 5,
  },
  imagemPizza: {
    width: 296,
    height: 176,
    position: "absolute",
    right: 0,
  },
  ingredientes: {
    padding: 20,
    marginTop: 30,
  },
  textoIngrediente: {
    fontFamily: fontes.mr700,
    fontSize: 16,
  },
  boxIngrediente: {
    marginTop: 20,
    backgroundColor: "#FFF",
    marginRight: 15,
    width: 100,
    height: 80,
    alignItems: "center",
    borderRadius: 15,
  },
  imagemIngrediente: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  fazerPedido: {
    marginTop: 60,
    paddingBottom: 48,
  },
  btnPedido: {
    backgroundColor: "#F5CA48",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 62,
  },
  textoBtn: {
    fontFamily: fontes.mr700,
    color: "#000",
    fontSize: 14,
  },
});

export { styles };
