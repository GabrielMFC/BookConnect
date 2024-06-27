import { View, Text, Image } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";

const ItensDasRotas = ({ ...props }) => {
  return (
    <View style={{ position: "relative", top: "5%", marginTop: "15%" }}>
      <DrawerItemList {...props} />
    </View>
  );
};
export default ItensDasRotas;
