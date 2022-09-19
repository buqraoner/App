import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

export default function ImageInput({ imageUri, onChangeImage }) {

    const handlePress = () => {
        if (!imageUri) selectImage();
        else
            Alert.alert("Delete", "Are you sure you want to delete this image?", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" },
            ])
    }


    const selectImage = async () => {
        const request = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!request.granted) return;
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) onChangeImage(result.uri);
        }
        catch (error) {
            console.log('Error reading an image', error);
        }
    };


    return (
        <TouchableWithoutFeedback onPress={onChangeImage}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons name="camera" size={40} color={colors.medium} />)}
                {imageUri && (<Image source={{ uri: imageUri }} style={styles.image} />)}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkgrey,
        borderRadius: 15,
        alignItems: "center",
        height: 100,
        justifyContent: "center",
        width: 100,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    }
})