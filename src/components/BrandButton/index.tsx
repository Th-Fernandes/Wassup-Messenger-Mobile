import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface Props {
  handleSignAction: () => void;
  textContent: string;
}

export function BrandButton({handleSignAction, textContent}:Props) {
  return (
    <TouchableOpacity  
        onPress={handleSignAction} 
        style={styles.container}
      >
        <Text style={styles.textContent}>
          {textContent}
        </Text>
      </TouchableOpacity>
  );
}