import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { Chat } from './Chat';

export function ChatsList() {
  const chats = [
    {
      id: 1,
      name: 'Global Chat',
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({item}) => <Chat title={item.name} />}
      />
    </View>
  );
}