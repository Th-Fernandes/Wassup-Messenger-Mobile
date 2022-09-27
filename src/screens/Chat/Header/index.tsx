import { ArrowLeft, GlobeHemisphereEast } from 'phosphor-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { THEME } from 'theme';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft 
          size={24} 
          color={THEME.COLORS.INPUT} 
        />
      </TouchableOpacity>

      <GlobeHemisphereEast style={{ marginHorizontal: 12 }} size={48} weight="fill" color={THEME.COLORS.INPUT} />

      <Text style={styles.chatName}>Global chat</Text>
    </View>
  );
}