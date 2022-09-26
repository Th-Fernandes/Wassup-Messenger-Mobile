import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signAction: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginTop: 16,
    textAlign: 'center'
  },

  changeSignAction: {
    color: THEME.COLORS.BRAND,
    fontFamily: THEME.FONT_FAMILY.MEDIUM
  }
});