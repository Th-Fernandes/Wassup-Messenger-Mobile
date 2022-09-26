import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

export function LoginForm() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      <TouchableOpacity  onPress={() => navigation.navigate('chats')} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}