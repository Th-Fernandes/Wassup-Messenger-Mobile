import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    backgroundColor: THEME.COLORS.BG_DARK_200,
    paddingHorizontal: 16
  },
  headerChatName: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TXT_LIGHT
  },
  messagesBody: {
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 16
  },
  messagesBodyUserMessageWrapper: {
    maxWidth: 240,
    marginBottom: 16
  },
  messagesBodyUserMessageContainer: {
    backgroundColor: "#434343",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
    borderRadius: 24,
    borderBottomLeftRadius: 0,
    marginBottom: 8
  },
  messagesBodyUserMessage: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TXT_LIGHT
  },
  messagesBodyUserParams: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  messagesBodyUserParamsUsername:{
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TXT_LIGHT,
    marginLeft: 13,
    marginRight: 8
  },
  messagesBodyUserParamsSendedAt: {
    color: THEME.COLORS.TXT_LIGHT
  },

  sendMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 8
  },
  sendMessageMessage: {
    backgroundColor: THEME.COLORS.INPUT_DARK,
    height: 48,
    borderRadius: 32,
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 96,
    color: THEME.COLORS.TXT_LIGHT,
  },
  sendMessageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BRAND,
    width: 48,
    height: 48,
    borderRadius: 48/2,
    marginLeft: 8
  }
});