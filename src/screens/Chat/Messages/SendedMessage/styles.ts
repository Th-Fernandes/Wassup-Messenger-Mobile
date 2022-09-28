import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    width: 240,
    marginBottom: 32,
    alignSelf: 'flex-end'
  },
  messageContainer: {
    backgroundColor: THEME.COLORS.BRAND, 
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    borderRadius: 24,
    borderBottomRightRadius: 0,
    marginBottom: 8
  },
  message: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TXT_LIGHT
  },
  userParams: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  userParamsSendedAt: {
    marginLeft: 8,
    color: THEME.COLORS.TXT_LIGHT
  }
});