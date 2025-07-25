import { StyleSheet, Image } from "react-native";

import { Text, View } from "@components/Themed";
import Colors from "@/constants/Colors";
import { Product } from "@/types";

const defaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.productContainer}>
      <Image
        source={{ uri: product.image || defaultImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  productContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#191919ff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: Colors.light.tint,
    fontSize: 23,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
