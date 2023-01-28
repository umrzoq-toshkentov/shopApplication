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
  arrow: {
    width: 20,
    height: 20,
    transform: [{rotate: '90deg'}],
  },
  placeholder: {
    paddingVertical: 21,
    paddingHorizontal: 17,
    flex: 1,
    color: colors.lightGrey,
  },
  modalWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  modalTitle: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey,
  },
  optionText: {
    paddingVertical: 8,
    color: colors.black,
    fontSize: 15,
  },
  selectedOption: {
    color: colors.blue,
    fontWeight: 'bold',
  },
});
