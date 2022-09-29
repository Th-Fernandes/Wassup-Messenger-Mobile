import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Header } from './Header';
import { SignActionForm } from './SignActionForm';

import { styles } from './styles';


export function Home() {
  const [signAction, setSignAction] = useState<'signIn' | 'signUp'>('signIn')

  function handleSignToggle() {
    if (signAction == 'signIn') setSignAction('signUp') 
    if (signAction == 'signUp') setSignAction('signIn') 

    console.log(signAction)
  }

  return (
    <View style={styles.container}>
      <Header/>
      <SignActionForm  signAction={signAction}/>
      <Text style={styles.signAction}>
        Não possui conta? 
          <Text  
          onPress={handleSignToggle}
          style={styles.changeSignAction} 
          >
            Clique aqui
          </Text>
        e crie agora mesmo!
      </Text>
    </View>
  );
}