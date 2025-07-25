import { StyleSheet, Image } from "react-native";
import ProuctListItem from "../../components/ProductListItem";

import Colors from "@/src/constants/Colors";
import Products from "@/assets/data/products";
import { View,Text } from "@/src/components/Themed";

export default function TabOneScreen() {
  const product = Products[0];
  return (
    <View style={styles.container}>
      <ProuctListItem product={Products[0]} />
      <ProuctListItem product={Products[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
  }
});
