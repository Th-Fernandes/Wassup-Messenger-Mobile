import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BRAND,
    width: 327,
    height: 40,
    color: THEME.COLORS.TXT_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    borderRadius: 16
  },
  textContent: {
    color: THEME.COLORS.TXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: 18
  }
});