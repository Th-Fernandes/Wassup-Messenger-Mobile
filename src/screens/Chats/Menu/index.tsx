import React from "react";

import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import {DotsThreeCircle, Sun, UserCircle} from "phosphor-react-native";
import { THEME } from "theme";

export function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <TouchableOpacity style={styles.profileButton}>
          <UserCircle  size={32} color={THEME.COLORS.LIGHT_ICON} weight="fill"  />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <DotsThreeCircle size={32} color={THEME.COLORS.LIGHT_ICON} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Sun size={32} color={THEME.COLORS.LIGHT_ICON} />
      </TouchableOpacity>
    </View>
  );
}