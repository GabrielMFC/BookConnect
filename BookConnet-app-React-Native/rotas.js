import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaDeLogin from "./src/screens/Login/Login.js";
import PaginaInicial from "./src/screens/Home/Home.js";
import TelaDeCadastro from "./src/screens/Cadastro";
import Favoritos from "./src/screens/Home/Opções/Favoritos/Favoritos.js";
import Perfil from "./src/screens/Home/Opções/Perfil/Perfil.js";
import DrawerCustom from "./src/components/DrawerCustomizado/Drawer.js";
import PopularesPage from "./src/screens/Home/CaixasDatelaDeInicio/Populares/PopularesPage.js";
import PaginaDoLivro from "./src/screens/Home/CaixasDatelaDeInicio/TelaDoLivro/TelaDoLivro.js";
import BoxDosLivros from "./src/screens/Home/CaixasDatelaDeInicio/Populares/Livros.js";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export const RotasStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={TelaDeLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={TelaDeCadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={RotasDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LivrosPopulares"
        component={PopularesPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PaginaDoLivro"
        component={PaginaDoLivro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export const RotasDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "gray",
        drawerInactiveBackgroundColor: "rgba(128, 128, 128, 0.2)",
        drawerStyle: {
          backgroundColor: "black",
          width: 200,
          borderRadius: 30,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
        drawerLabelStyle: {
          textAlign: "center",
        },
      }}
      drawerContent={(props) => <DrawerCustom {...props} />}
    >
      <Drawer.Screen
        name="Início"
        options={{
          headerTitle: "",
          drawerActiveBackgroundColor: "lightgreen",
          headerStyle: {
            backgroundColor: "",
          },
          drawerIcon: () => (
            <Image
              source={require("./assets/Icones/home.png")}
              style={{
                height: 20,
                width: 20,
                position: "absolute",
                marginLeft: "5%",
              }}
            />
          ),
        }}
        component={PaginaInicial}
      />
      <Drawer.Screen
        name="Perfil"
        options={{
          headerTitle: "",
          drawerActiveBackgroundColor: "lightblue",
          drawerIcon: () => (
            <Image
              source={require("./assets/Icones/user.png")}
              style={{
                height: 20,
                width: 20,
                position: "absolute",
                marginLeft: "5%",
              }}
            />
          ),
        }}
        component={Perfil}
      />
      <Drawer.Screen
        name="Meus livros"
        options={{
          headerTitle: "",
          drawerActiveBackgroundColor: "red",
          drawerIcon: () => (
            <Image
              source={require("./assets/Icones/bag.png")}
              style={{
                height: 20,
                width: 20,
                position: "absolute",
                marginLeft: "5%",
              }}
            />
          ),
        }}
        component={Favoritos}
      />
    </Drawer.Navigator>
  );
};
