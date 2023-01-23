import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    padding: 24,
    paddingTop: 50,
  },
  scrollViewContainer: {
    padding: 24,
  },
  formSection: {
    display: 'flex',
    gap: 20,
    paddingTop: 54,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    marginTop: 10,
    color: colors.blue,
    fontSize: 14,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
});
