import { MessagesTable } from 'lib/supabase/database';
import { UserCircle } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { THEME } from 'theme';

import { styles } from './styles';

export function SendedMessage({message, created_at}:MessagesTable) {
  function handleCreatedAtFormater(created_at: string) {
    const [date, time] = created_at.split('T');
    console.log(date, time)
    const [hour, minute, second] = time.split(':')

    return `${hour}:${minute}`
  }
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          {message}
        </Text>
      </View>

      <View style={styles.userParams}>
        <UserCircle size={24} weight="fill" color={THEME.COLORS.INPUT} />
        <Text style={styles.userParamsSendedAt}>{handleCreatedAtFormater(created_at)}</Text>
      </View>
    </View>
  );
}