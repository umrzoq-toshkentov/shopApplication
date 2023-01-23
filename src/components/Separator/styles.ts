import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  line: {
    height: 1,
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
  text: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
