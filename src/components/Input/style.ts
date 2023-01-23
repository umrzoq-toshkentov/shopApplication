import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 9,
  },
  label: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 17,
  },
  input: {
    paddingVertical: 21,
    paddingHorizontal: 17,
    flex: 1,
  },
  icon: {},
});
