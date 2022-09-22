import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    alignItems: 'center'
  },
  
  headerText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TXT_LIGHT,
    fontSize: THEME.FONT_SIZE.LG,
    textAlign: 'center',
    marginTop: 8
  },

  form: {
    marginTop: 32,
    alignItems: 'center'
  },

  formTitle: {
    fontSize: THEME.FONT_SIZE.XLG,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    textAlign: 'center',
    color: THEME.COLORS.TXT_LIGHT,
  },

  formInputContainer: {
    alignItems: 'center',
    marginTop: 16
  },

  formLabel: {
    color: THEME.COLORS.TXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.SM,
    marginBottom: 16,
  },

  formInput: {
    backgroundColor: THEME.COLORS.INPUT,
    borderRadius: 16,
    width: 327,
    height: 38,
    borderWidth: 1,
    paddingHorizontal: 16,
  },

  formSubmitButton: {
    backgroundColor: THEME.COLORS.BRAND,
    width: 327,
    height: 40,
    color: THEME.COLORS.TXT_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    borderRadius: 16
  },

  formSubmitButtonText: {
    color: THEME.COLORS.TXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: 18
  },
  signAction: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginTop: 16
  }
});