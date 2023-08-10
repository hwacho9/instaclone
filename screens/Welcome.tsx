import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Props } from '../navigators/LoggedOutNav';

export default function Welcome({ navigation }: Props) {
  console.log(navigation);
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <View>
          <Text>Go to Create Accout</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View>
          <Text>Go to Log In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
