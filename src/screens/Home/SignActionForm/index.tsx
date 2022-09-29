import React, { useState } from 'react';
import {  View } from 'react-native';

import { styles } from './styles';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

interface SignAction {
  signAction: 'signIn' | 'signUp'
}

export function SignActionForm({signAction}:SignAction) {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userUsername, setUserUsername] = useState<string>('');
  
  return (
    <View style={styles.container}>
      {
        signAction === "signIn" 
        ? <SignIn
            setUserEmail={setUserEmail}
            userEmail={userEmail}
            setUserPassword={setUserPassword}
            userPassword={userPassword}
          />
    
        : <SignUp
            setUserUsername={setUserUsername}
            userUsername={userUsername}
            setUserEmail={setUserEmail}
            userEmail={userEmail}
            setUserPassword={setUserPassword}
            userPassword={userPassword}
          />
      }

      
    </View>
  );
}