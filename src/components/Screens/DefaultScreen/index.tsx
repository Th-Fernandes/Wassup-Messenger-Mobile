import { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface Props {
  children: ReactNode
}

export function DefaultScreen({children}: Props) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}