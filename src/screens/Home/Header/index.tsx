import React from 'react';
import { Image, Text, View } from 'react-native';
import logo from "assets/logo.png";
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
        <Image source={logo}/>
        <Text style={styles.text}>Que bom ter você aqui na Wassup messenger</Text>
    </View>
  );
}