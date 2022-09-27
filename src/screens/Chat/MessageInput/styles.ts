import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 8
  },
  input: {
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