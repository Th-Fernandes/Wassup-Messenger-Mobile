import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium
} from "@expo-google-fonts/roboto"
import { THEME } from 'theme';
import { DefaultScreen } from 'components/DefaultScreen';
import { Home } from 'screens/Home';


export default function App() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  })

  return (
    <DefaultScreen >
      <StatusBar 
        barStyle='light-content'
        backgroundColor={THEME.COLORS.BG_DARK}
      />
      {isFontsLoaded && <Home />}
    </DefaultScreen>
  );
}
