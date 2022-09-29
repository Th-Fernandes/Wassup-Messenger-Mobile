import { BrandButton } from 'components/BrandButton';
import { InputContainer } from 'components/InputContainer';
import { authActions } from 'lib/supabase/auth';
import React, { Dispatch, SetStateAction } from 'react';
import { Text} from 'react-native';
import type { UserCredentials } from './SignIn';
import { styles } from './styles';

interface Props extends UserCredentials {
  setUserUsername: Dispatch<SetStateAction<string>>;
  userUsername: string;
} 

export function SignUp({
  setUserUsername, 
  userUsername, 
  setUserEmail, 
  userEmail,
  setUserPassword, 
  userPassword}: Props) {

  async function handleSignUp() {
    const { signUp } = authActions;
    await signUp(userEmail, userPassword, userUsername);
    alert('Falta pouco! Confirme sua conta no email para liberar o acesso a sua conta.')
  }

  return (
    <>
      <Text style={styles.title}>CADASTRO</Text>

      <InputContainer
        label='Username'
        getInputChange={setUserUsername}
      />

      <InputContainer
        label='E-mail'
        getInputChange={setUserEmail}
      />

      <InputContainer
        label='Senha'
        getInputChange={setUserPassword}
      />

      <BrandButton handleSignAction={handleSignUp} textContent="Cadastrar" />
    </>
  );
}