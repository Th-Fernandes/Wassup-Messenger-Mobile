import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16
  },
  label: {
    color: THEME.COLORS.TXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.SM,
    marginBottom: 16,
  },
  input: {
    backgroundColor: THEME.COLORS.INPUT,
    borderRadius: 16,
    width: 327,
    height: 38,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
});