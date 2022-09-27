import { PaperPlaneTilt } from 'phosphor-react-native';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { THEME } from 'theme';

import { styles } from './styles';

export function MessageInput() {
  return (
    <View style={styles.container}>
        <TextInput
          placeholder='Digite sua mensagem aqui'
          placeholderTextColor={THEME.COLORS.TXT_LIGHT_200}
          multiline
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendMessageButton}>
          <PaperPlaneTilt size={30} color={THEME.COLORS.INPUT} weight="fill"/>
        </TouchableOpacity>
      </View>
  );
}