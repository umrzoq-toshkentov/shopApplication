import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {},
  modalWrapper: {},
  modalTitle: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 16,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
});
