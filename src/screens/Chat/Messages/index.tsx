import { Loading } from 'components/Loading';
import { authActions } from 'lib/supabase/auth';
import { databaseActions, MessagesTable } from 'lib/supabase/database';
import { supabase } from 'lib/supabase/supabaseClient';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { RecievedMessage } from './RecievedMessage';
import { SendedMessage } from './SendedMessage';

import { styles } from './styles';

export function Messages() {
  const [messages, setMessages] = useState<MessagesTable[]>([]);
  const [userSession, setUserSession] = useState<string>();


  useEffect(() => {
    const { selectAll } = databaseActions;

    selectAll
      .from('messages', () => {})
      .then(data => data && setMessages(data))
  }, [])

  useEffect(() => {
    const { getSession} = authActions

    async function getSessionId() {
      setUserSession((await getSession()).session?.user.id)
    }

    getSessionId()
 
  } , [])

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
            
          : userSession &&
          messages.map((message:MessagesTable )=> {
            if(userSession === message.session_id) {
              return <SendedMessage 
                key={message.id}
                message={message.message}
                username={message.username}
                created_at={message.created_at}
              />
            }

            return <RecievedMessage
            key={message.id}
            message={message.message}
            username={message.username}
            created_at={message.created_at}
          />
          })
      }

      
    </ScrollView>
  );
}