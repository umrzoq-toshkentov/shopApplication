import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    padding: 8,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: 'bold',
  },
  image: {
    width: 18,
    height: 17,
  },
});
