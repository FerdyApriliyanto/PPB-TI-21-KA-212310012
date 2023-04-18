import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormRCC from './src/FormRCC';
import FormRFC from './src/FormRFC';
import SignInBasic from './src/SignIn';

export default function App() {
  return (
    // <FormRCC /> //RCC State 
    // <FormRFC /> //RFC useState Hook
    <SignInBasic />
  );
}
