import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';


export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 24,
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: colors.borderColor,
    justifyContent: "space-between"
  },
  leftContent: {
    flexDirection: "row"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  content: {

  },
  title: {
    color: colors.textGrey,
    paddingVertical: 8
  },
  price: {
    color: colors.black,
    paddingBottom: 8
  },
  deleteImage: {
    width: 20,
    height: 20,
  }
});
