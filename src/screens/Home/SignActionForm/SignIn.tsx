import { BrandButton } from "components/BrandButton";
import { InputContainer } from "components/InputContainer";
import { Dispatch, SetStateAction } from "react";
import { Text } from "react-native";
import { styles } from "./styles"
import { useNavigation } from '@react-navigation/native';
import { authActions } from "lib/supabase/auth";

export interface UserCredentials {
  setUserEmail: Dispatch<SetStateAction<string>>;
  userEmail: string
  setUserPassword: Dispatch<SetStateAction<string>>;
  userPassword: string;
  
}

export function SignIn({setUserEmail,userEmail , setUserPassword, userPassword}:UserCredentials) {
  const navigation = useNavigation();

  async function handleSignIn() {
    const { signInWithPassword } = authActions;
    const signIn = await signInWithPassword(userEmail, userPassword);

    if (signIn) navigation.navigate('chats');
  }

  return (
    <>
      <Text style={styles.title}>LOGIN</Text>

      <InputContainer
        label='E-mail'
        getInputChange={setUserEmail}
      />

      <InputContainer
        label='Senha'
        getInputChange={setUserPassword}
      />
      <BrandButton handleSignAction={handleSignIn} textContent="Entrar" />
    </>
  )
}