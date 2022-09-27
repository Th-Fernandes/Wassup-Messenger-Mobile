import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from 'screens/Home';
import { Chat } from 'screens/Chat';
import { Chats } from 'screens/Chats';

import { THEME } from 'theme';

export function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: THEME.COLORS.BG_DARK
        }
      }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="chats" component={Chats} />
        <Stack.Screen name="chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}