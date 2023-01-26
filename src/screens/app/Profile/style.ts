import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    padding: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 14,
    color: colors.grey,
  },
  listContainer: {
    marginTop: 25,
    flexDirection: 'column',
    gap: 20,
  },
  footer: {
    flex: 1,
    padding: 24,
  },

  button: {
    marginTop: 270,
  },
});
