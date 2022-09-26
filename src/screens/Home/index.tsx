import { Text, TouchableOpacity, View } from 'react-native';

import { Header } from './Header';
import { LoginForm } from './LoginForm';

import { styles } from './styles';


export function Home() {
  

  return (
    <View style={styles.container}>
      <Header/>
      <LoginForm/>
      <Text style={styles.signAction}>
        Não possui conta? 
        <Text style={styles.changeSignAction}> Clique aqui </Text> 
        e crie agora mesmo!
      </Text>
    </View>
  );
}