import { StatusBar } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium
} from "@expo-google-fonts/roboto"
import { THEME } from 'theme';
import { StyleSheet } from 'react-native';

export default function App() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  })


  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor={THEME.COLORS.BG_DARK}
      />
      {isFontsLoaded && <Text style={{color: THEME.COLORS.TXT_LIGHT,}}>Hello world</Text>}
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  container: { 
    flex: 1 ,
    backgroundColor: THEME.COLORS.BG_DARK,
  }
});