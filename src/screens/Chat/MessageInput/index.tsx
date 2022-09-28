import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { PaperPlaneTilt } from 'phosphor-react-native';

import { THEME } from 'theme';
import { styles } from './styles';
import { supabase } from 'lib/supabase/supabaseClient';
import { authActions } from 'lib/supabase/auth';
import { databaseActions } from 'lib/supabase/database';

export function MessageInput() {
  const [message, setMessage] = useState<string>('');
  const [ isMessageSended, setIsMessageSended ] = useState<boolean>(false);

  useEffect(() => {
    async function insertMessageOnDatabase() {
      async function getSessionUserNameAndId() {
        const { session } = await authActions.getSession();
        const username = session?.user?.user_metadata?.username;
        const sessionId = session?.user?.id;

        return { username, session_id: sessionId };
      }


      const newRow = {...await getSessionUserNameAndId(), message};

      const { insert } =  databaseActions;
      insert
        .from('messages')
        .insert(newRow)
    }

    if(isMessageSended) {
      insertMessageOnDatabase();
      setIsMessageSended(false);
      setMessage('');
    }
  }, [isMessageSended])

  return (
    <View style={styles.container}>
        <TextInput
          onChangeText={(message:string) => setMessage(message)}
          placeholder='Digite sua mensagem aqui'
          placeholderTextColor={THEME.COLORS.TXT_LIGHT_200}
          value={message}
          multiline
          style={styles.input}
        />
        <TouchableOpacity 
          onPress={() => {
            if(message.length > 0) setIsMessageSended(true)
          }}
          style={styles.sendMessageButton}
        >
          <PaperPlaneTilt size={30} color={THEME.COLORS.INPUT} weight="fill"/>
        </TouchableOpacity>
      </View>
  );
}