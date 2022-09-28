import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { PaperPlaneTilt } from 'phosphor-react-native';

import { THEME } from 'theme';
import { styles } from './styles';
import { supabase } from 'lib/supabase/supabaseClient';

export function MessageInput() {
  const [message, setMessage] = useState<string>('');
  const [ isMessageSended, setIsMessageSended ] = useState<boolean>(false);

  useEffect(() => {
    async function insertMessageOnDatabase() {
      async function getSession() {
        const { data, error } = await supabase.auth.getSession();

        return data
      }

      const {session} = await getSession();
      const username = session?.user?.user_metadata?.username;
      const sessionId = session?.user?.id

      const { data, error } = await supabase
        .from('messages')
        .insert({ username: username || 'Unknown user' , message, session_id: sessionId })
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