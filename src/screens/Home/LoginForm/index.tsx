import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { authActions } from 'lib/supabase/auth';

export function LoginForm() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [isSignInDone, setIsSignInDone] = useState<boolean>(false);

  async function handleSignIn() {
    const { signInWithPassword } = authActions;
    const signIn = await signInWithPassword(userEmail, userPassword)

    return signIn
  }
  
  return (
    <View 
      style={styles.container}
    >
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput  
            onChangeText={email => setUserEmail(email)}
            style={styles.input} 
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput 
            secureTextEntry={true}
            onChangeText={password => setUserPassword(password)}
            style={styles.input} 
          />
        </View>
      </View>

      <TouchableOpacity  
        onPress={async () => {
          const isSignInDone =  await handleSignIn() 
          isSignInDone && navigation.navigate('chats')
        }} 
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>
          ENTRAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}