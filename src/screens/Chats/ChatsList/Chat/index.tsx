import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {GlobeHemisphereEast} from "phosphor-react-native"
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}

export function Chat({title}: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('chat')}
      style={styles.container} 
      >
        <GlobeHemisphereEast color='#fff' size={48} weight="fill" />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>
            {title}
          </Text> 
          <Text style={styles.caption}>
            Clique para participar
          </Text>
        </View>
    </TouchableOpacity>
  );
}