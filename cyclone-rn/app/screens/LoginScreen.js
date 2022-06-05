import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ElButton from '../components/ElButton';
import ElTextInput from '../components/ElTextInput';
import Link from '../components/Link';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import ElTitle from './../components/ElTitle';
import routes from '../navigation/routes';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useAuth } from './../hooks/useAuth';
import Google from './../svgs/google';
import Facebook from './../svgs/facebook';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const initValue = {
  email: 'fred@qq.com',
  password: '123123',
};

export default function LoginScreen({ navigation }) {
  const { logIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const submit = async (values) => {
    setLoading(true);
    // const res = await authService.login(values.email, values.password);
    setTimeout(() => {
      logIn(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9oYXNoIjoiNGEwNTIyODAtMThiMC00NGRkLThkNDYtODllYjQ4MDA5MjllIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiamlhbmdmQHFxLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjNiZDMxNjhmLTI0MjQtNDA0ZC04MmJiLWM2YjM5YTAzOTcxOSIsImlkIjoiM2JkMzE2OGYtMjQyNC00MDRkLTgyYmItYzZiMzlhMDM5NzE5IiwiZmlyc3ROYW1lIjoiRnJlZCIsImxhc3ROYW1lIjoiRG9hbmNlIiwicGljdHVyZVVybCI6IiIsIm5iZiI6MTY0MjU4MDYzMiwiZXhwIjoxNjQyNjY3MDMyLCJpc3MiOiJFbHl0ZSIsImF1ZCI6Ind3dy5lbHl0ZS5jb20ifQ.PM_ysmZNh861Aa9R0A8YQuguy9I8_pwCuJn0yf6ZGeE'
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Loader visible={loading} />
      <ElTitle>Account Login</ElTitle>
      <Formik
        initialValues={initValue}
        validationSchema={validationSchema}
        onSubmit={(values) => submit(values)}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <ElTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              placeholder="Email or Phone number"
              keyboardType="email-address"
              textContentType="emailAddress"
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
            />
            <ErrorMessage error={errors['email']} visible={touched['email']} />

            <ElTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
            />
            <ErrorMessage
              error={errors['password']}
              visible={touched['password']}
            />

            <Text
              style={{
                textAlign: 'center',
                marginTop: 16,
                marginBottom: 8,
              }}
            >
              Forgot the password? Request for a{' '}
              <Link to={routes.Register}>Password Reset</Link> or{' '}
              <Link to={routes.Register}>Contact us</Link>
            </Text>

            {/* <Text style={styles.or}>or</Text>
            <Text style={styles.with}>
              Sign In with your Google or Facebook{' '}
            </Text>

            <View style={styles.google}>
              <Google />
              <Facebook />
            </View> */}
            <ElButton title="Sign in" onPress={handleSubmit} />
            <Text style={{ textAlign: 'center', marginBottom: 32 }}>
              <Link to={routes.Register}>Sign up for free</Link>
            </Text>
          </>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
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
