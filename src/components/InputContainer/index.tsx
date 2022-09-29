import React, { Dispatch, SetStateAction } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

interface Props extends TextInputProps {
  getInputChange: Dispatch<SetStateAction<string>>
  label: string | 'Senha';
}

export function InputContainer(props:Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          secureTextEntry={props.label === 'Senha'}
          onChangeText={value => props.getInputChange(value)}
          style={styles.input}
        />
      </View>
    </View>
  );
}