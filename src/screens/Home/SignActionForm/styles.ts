import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    alignItems: 'center'
  },
  title: {
    fontSize: THEME.FONT_SIZE.XLG,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    textAlign: 'center',
    color: THEME.COLORS.TXT_LIGHT,
  },
  inputContainer: {
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

  submitButton: {
    backgroundColor: THEME.COLORS.BRAND,
    width: 327,
    height: 40,
    color: THEME.COLORS.TXT_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    borderRadius: 16
  },

  submitButtonText: {
    color: THEME.COLORS.TXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: 18
  },
});