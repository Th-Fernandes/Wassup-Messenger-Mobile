import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  text: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TXT_LIGHT,
    fontSize: THEME.FONT_SIZE.LG,
    textAlign: 'center',
    marginTop: 8
  }
});