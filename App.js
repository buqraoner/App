import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';




import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppFormPicker from './app/components/forms/AppFormPicker';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';



export default function App() {
  const [imageUris, setImageUris] = useState();

  return (

    <Screen>
      <ImageInputList
        imageUri={imageUris}
        onAddImage={uri => setImageUris([...imageUris, uri])}
        onRemoveImage={uri => setImageUris(imageUris.filter(imageUri => imageUri !== uri))}
      />
    </Screen>
  )
}


