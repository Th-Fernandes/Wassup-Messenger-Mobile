import React from 'react';
import { StatusBar, View } from 'react-native';

import { Header } from './Header';
import { Messages } from './Messages';
import { MessageInput } from './MessageInput';

import { THEME } from 'theme';
import { styles } from './styles';

export function Chat() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={THEME.COLORS.BG_DARK_200}
      />
      <Header/>
      <Messages/>
      <MessageInput/>
    </View>
  );
}