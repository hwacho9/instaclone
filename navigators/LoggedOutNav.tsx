import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../screens/Weclome';
import CreateAccount from '../screens/CreateAccount';
import LogIn from '../screens/LogIn';

const Stack = createNativeStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Weclome" component={Welcome} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
