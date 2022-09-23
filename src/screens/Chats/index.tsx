import { View } from 'react-native';
import { ChatsList } from './ChatsList';
import { Menu } from './Menu';

import { styles } from './styles';

export function Chats() {
  return (
    <View style={styles.container}>
      <Menu />
      <ChatsList />
    </View>
  );
}