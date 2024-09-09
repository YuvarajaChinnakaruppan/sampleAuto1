/*************************************************
 * CommonSetup
 * @exports
 * SplashScreen.tsx
 * Created by Abdul on 06/07/2023
 * Copyright © 2023 CommonSetup. All rights reserved.
 *************************************************/

// imports
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your App Name</Text>
      {/* You can add any additional branding elements here */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
