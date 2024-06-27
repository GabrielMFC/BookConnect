import { NavigationContainer } from "@react-navigation/native";
import { RotasStack } from "./rotas";
import "react-native-gesture-handler";
import AuthProvider from "./src/Context/userData";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <AuthProvider>
        <RotasStack />
      </AuthProvider>
    </NavigationContainer>
  );
}
