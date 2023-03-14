import { View } from "@react-pdf/renderer";

const ItemWrapper = ({ children }: any) => {
  return <View style={{ paddingTop: "10px" }}>{children}</View>;
};
export default ItemWrapper;
