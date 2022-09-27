import { UserCircle } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { THEME } from 'theme';

import { styles } from './styles';

export function RecievedMessage() {
  return (
    <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            Lorem ipsum. Test 1234 hello
            world console.log Lorem ipsum. Test 1234 hello  console.log 23
          </Text>
        </View>

        <View style={styles.userParams}>
          <UserCircle size={24} weight="fill" color={THEME.COLORS.INPUT} />
          <Text style={styles.userParamsUsername}>User12</Text>
          <Text style={styles.userParamsSendedAt}>14:45</Text>
        </View>
      </View>
  );
}