import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    maxWidth: 240,
    marginBottom: 16
  },
  messageContainer: {
    backgroundColor: "#434343",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
    borderRadius: 24,
    borderBottomLeftRadius: 0,
    marginBottom: 8
  },
  message: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TXT_LIGHT
  },
  userParams: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userParamsUsername: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TXT_LIGHT,
    marginLeft: 13,
    marginRight: 8
  },
  userParamsSendedAt: {
    color: THEME.COLORS.TXT_LIGHT
  }
});