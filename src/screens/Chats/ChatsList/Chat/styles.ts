import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderWidth: 2,
    borderColor: "#565656",
    borderRadius: 8
  },
  infoContainer: {
    marginLeft: 12,
  },
  title: {
    color: THEME.COLORS.TXT_LIGHT,
    fontSize: THEME.FONT_SIZE.MD + 2,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    
  },
  caption: {
    color: THEME.COLORS.TXT_LIGHT_200
  }
});