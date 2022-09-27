import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    backgroundColor: THEME.COLORS.BG_DARK_200,
    paddingHorizontal: 16
  },
  chatName: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TXT_LIGHT
  }
});