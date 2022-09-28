import { Loading } from 'components/Loading';
import { databaseActions, MessagesTable } from 'lib/supabase/database';
import { supabase } from 'lib/supabase/supabaseClient';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { RecievedMessage } from './RecievedMessage';

import { styles } from './styles';

export function Messages() {
  const [messages, setMessages] = useState<MessagesTable[]>([]);

  useEffect(() => {
    const { selectAll } = databaseActions;

    selectAll
      .from('messages', () => {})
      .then(data => data && setMessages(data))
  }, [])

  useEffect(() => {
    supabase
      .channel('public:messages')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, (payload:any) => {
        const newMessage = payload?.new;
        console.log('change successfully listen')

        if(newMessage) setMessages(oldMessages => [...oldMessages, newMessage])
      })
      .subscribe()
  }, [])

  return (
    <ScrollView style={styles.container}>
      {
        messages.length === 0 
          ? <Loading />
            
          : messages.map((message:MessagesTable )=> (
            <RecievedMessage
              key={message.id}
              message={message.message}
              username={message.username}
              created_at={message.created_at}
            />
          ))
      }
    </ScrollView>
  );
}