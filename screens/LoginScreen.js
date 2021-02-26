import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
// import * as Google from 'expo-google-app-auth'
// import { IOS_CLIENT_ID, AND_CLIENT_ID } from 'react-native-dotenv';

class LoginScreen extends Component {
    signInWithGoogleAsync = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                behavior: 'web',
                androidClientId: '497659201270-7hn3rb23sd6gema19rskhjdkc1jfsnil.apps.googleusercontent.com',
                iosClientId: '497659201270-3rl0jc8rdtubufqq3thqhq5d7qfb5876.apps.googleusercontent.com',
                //webClientId: '497659201270-fboa8icbvmgssd7ajlmmpdbk2q9rt6t1.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
                return { error: true };
            }
    }
    render(){
        return (
            <View style={styles.container}>
            <Button 
                title="Sign In With Google"
                onPress={() => this.signInWithGoogleAsync()} />
                <Text>Hello</Text>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});