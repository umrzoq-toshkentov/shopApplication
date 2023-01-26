import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  content: {
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.grey,
    fontSize: 12,
    fontWeight: '300',
  },
  arrowContainer: {
    width: 24,
    height: 24,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  arrow: {
    width: 6,
    height: 12,
  },
});
