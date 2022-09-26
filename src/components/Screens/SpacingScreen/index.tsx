import { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface Props {
  children: ReactNode
}

export function SpacingScreen({children}: Props) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}