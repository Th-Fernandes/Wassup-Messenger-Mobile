import { ArrowLeft, GlobeHemisphereEast, PaperPlaneTilt, UserCircle } from 'phosphor-react-native';
import React from 'react';
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { THEME } from 'theme';

import { styles } from './styles';

export function Chat() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={THEME.COLORS.BG_DARK_200}
      />

      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color={THEME.COLORS.INPUT} />
        </TouchableOpacity>

        <GlobeHemisphereEast style={{marginHorizontal: 12}} size={48} weight="fill" color={THEME.COLORS.INPUT}/>

        <Text style={styles.headerChatName}>Global chat</Text>
      </View>

      <ScrollView style={styles.messagesBody}>
        <View style={styles.messagesBodyUserMessageWrapper}>
          <View style={styles.messagesBodyUserMessageContainer}>
            <Text style={styles.messagesBodyUserMessage}>
            Lorem ipsum. Test 1234 hello 
            world console.log Lorem ipsum. Test 1234 hello  console.log 23
            </Text>
          </View>

          <View style={styles.messagesBodyUserParams}>
            <UserCircle size={24} weight="fill" color={THEME.COLORS.INPUT} />
            <Text style={styles.messagesBodyUserParamsUsername}>User12</Text>
            <Text style={styles.messagesBodyUserParamsSendedAt}>14:45</Text>
          </View>
        </View>

        
      </ScrollView>

      <View style={styles.sendMessageContainer}>
        <TextInput
          placeholder='Digite sua mensagem aqui'
          placeholderTextColor={THEME.COLORS.TXT_LIGHT_200}
          multiline
          style={styles.sendMessageMessage}
        />
        <TouchableOpacity style={styles.sendMessageButton}>
          <PaperPlaneTilt size={30} color={THEME.COLORS.INPUT} weight="fill"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}