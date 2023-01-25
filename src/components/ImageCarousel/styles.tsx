import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const { height, width } = Dimensions.get("window")

export const styles = StyleSheet.create({
  image: {
    width: width,
    height: "100%"
  },
  list: {
    height: height * 0.45
  },
  paginationStyle: {
    height: 4,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 5,
  },
  activeLine: {
    height: 4,
    width: 30,
    borderRadius: 10,
    backgroundColor: colors.black,
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    alignSelf: "center"
  }
});
