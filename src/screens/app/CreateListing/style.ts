import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    padding: 24,
  },
  personal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginBottom: 50,
  },
  footer: {
    flex: 1,
    padding: 24,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.grey,
  },
  contentImageContainer: {
    width: 24,
    height: 24,
  },
  contentImage: {
    width: 20,
    height: 20,
  },
});
