import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryPickerItem from '../components/CategoryPickerItem';
import ElPicker from '../components/ElPicker';
import ImageInputList from '../components/ImageInputList';
import * as Yup from 'yup';
import ElTitle from './../components/ElTitle';
import ElTextInput from '../components/ElTextInput';
import ElButton from './../components/ElButton';
import Google from './../svgs/google';
import Facebook from './../svgs/facebook';
import GoBackDark from '../svgs/goBackDark';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.string().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const sports = [
  { label: 'Baseball', value: 1, backgroundColor: '#fc5c65', icon: 'baseball' },
  {
    label: 'Basketball',
    value: 2,
    backgroundColor: '#fd9644',
    icon: 'basketball',
  },
  { label: 'Soccer', value: 3, backgroundColor: '#fed330', icon: 'soccer' },
  {
    label: 'Jump-Rope',
    value: 4,
    backgroundColor: '#26de81',
    icon: 'jump-rope',
  },
  {
    label: 'Table-Tennis',
    value: 5,
    backgroundColor: '#2bcbba',
    icon: 'table-tennis',
  },
  { label: 'Tennis', value: 6, backgroundColor: '#45aaf2', icon: 'tennis' },
];

export default function RegisterScreen({ navigation }) {
  const [sport, setSport] = useState();

  return (
    <>
      <GoBackDark />
      <ElTitle>Account Registration</ElTitle>
      <ElTextInput
        autoCapitalize="none"
        autoCorrect={false}
        name="firstName"
        placeholder="First Name"
      />
      <ElTextInput
        autoCapitalize="none"
        autoCorrect={false}
        name="lastName"
        placeholder="Last Name"
      />
      <ElTextInput
        autoCapitalize="none"
        autoCorrect={false}
        name="email"
        placeholder="Email"
      />
      <ElTextInput
        autoCapitalize="none"
        autoCorrect={false}
        name="password"
        placeholder="Password"
        secureTextEntry
      />

      <ElPicker
        icon="apps"
        items={sports}
        name="sports"
        numberOfColumns={3}
        PickerItem={CategoryPickerItem}
        onSelectedItem={setSport}
        selectedItem={sport}
        placeholder="Sports"
      />

      <ElButton title="Create an account" />

      <Text style={styles.or}>or</Text>
      <Text style={styles.with}>Sign In with your Google or Facebook </Text>

      <View style={styles.google}>
        <Google />
        <Facebook />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  or: {
    textAlign: 'center',
    opacity: 0.2,
    marginTop: 8,
  },
  with: {
    textAlign: 'center',
    opacity: 0.2,
    marginTop: 8,
    marginBottom: 16,
  },
  google: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
    marginBottom: 8,
  },
});
