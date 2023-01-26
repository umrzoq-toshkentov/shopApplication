import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 4,
  },
  label: {
    color: colors.secondGrey,
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 5,
  },
  input: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
});
