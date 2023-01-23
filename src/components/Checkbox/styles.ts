import {colors} from './../../utils/colors';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  checkboxContainer: {
    backgroundColor: colors.grey,
    borderRadius: 4,
    height: 22,
    width: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  checkBoxEmpty: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 4,
    height: 22,
    width: 22,
  },
  icon: {
    width: 12,
    height: 9,
  },
  text: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '600',
  },
});
