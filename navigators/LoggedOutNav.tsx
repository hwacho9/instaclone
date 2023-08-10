import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../screens/Welcome';
import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};
export type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
