import { StatusBar } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { THEME } from 'theme';
import { StyleSheet } from 'react-native';


export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor={THEME.COLORS.BG.DARK}
      />
      <Text style={{color: THEME.COLORS.BRAND}}>Hello world</Text>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  container: { 
    flex: 1 ,
    backgroundColor: THEME.COLORS.BG.DARK
  }
})