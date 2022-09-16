import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function RnImagePicker() {
  const [selectedImage, setSelectedImage] = React.useState({});
  
  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult?.uri });
  };

  const openTakeImageAsync = async () => {
    let permissionResult =
      await Permissions

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult?.uri });
  };

  let openShareDialogAsync = async () => {
    if (Platform.OS === 'web') {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <>
      {selectedImage.localUri && (
        <Image
          style={styles.thumbnail}
          source={{ uri: selectedImage.localUri }}
        />
      )}
      <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
        <Text style={styles.buttonText}>Share this photo</Text>
      </TouchableOpacity>
      <Button title="Pick a photo" onPress={openImagePickerAsync}></Button>
      <Button title="Take photo" onPress={openImagePickerAsync}></Button>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
