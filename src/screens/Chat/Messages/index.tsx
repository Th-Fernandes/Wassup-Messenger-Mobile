import React from 'react';
import { ScrollView, View } from 'react-native';
import { RecievedMessage } from './RecievedMessage';

import { styles } from './styles';

export function Messages() {
  return (
    <ScrollView style={styles.container}>
      <RecievedMessage />
    </ScrollView>
  );
}