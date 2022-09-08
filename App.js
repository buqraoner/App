import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MessagesScreen from './app/screens/MessagesScreen';


export default function App() {
  return (
    <MessagesScreen />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
