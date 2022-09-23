import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from "assets/logo.png";


import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from 'lib/supabase/supabaseClient';

export function Home() {
  async function handleTest() {
    const { data, error } = await supabase
    .from('messages')
    .select('*')


    console.log(data, error)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo}/>
        <Text style={styles.headerText}>Que bom ter você aqui na Wassup messenger</Text>
      </View>

      <SafeAreaView style={styles.form}>
        <Text style={styles.formTitle}>LOGIN</Text>

        <View style={styles.formInputContainer}>
          <View>
            <Text style={styles.formLabel}>E-mail</Text>
            <TextInput style={styles.formInput} />
          </View>
        </View>

        <View style={styles.formInputContainer}>
          <View>
            <Text style={styles.formLabel}>Senha</Text>
            <TextInput style={styles.formInput} />
          </View>
        </View>

        <TouchableOpacity style={styles.formSubmitButton} onPress={handleTest}>
          <Text style={styles.formSubmitButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <Text style={styles.signAction} >Não possui conta? Clique aqui e faça agora mesmo!</Text>
    </View>
  );
}