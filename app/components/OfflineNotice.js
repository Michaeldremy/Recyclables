import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

import AppText from '../components/AppText'
import color from '../config/color';

function OfflineNotice(props) {

  const netInfo = useNetInfo()
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: color.primary,
    justifyContent: 'center',
    height: 50,
    width: '100%',
    top: Constants.statusBarHeight,
    position: 'absolute',
    zIndex: 1
  },
  text: {
    color: color.white
  },
});

export default OfflineNotice;