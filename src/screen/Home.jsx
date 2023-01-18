import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const Following = () => {
  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    console.log('event', e);
  });
  // I have a composed gesture here but even single one is not working here
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <GestureDetector gesture={longPressGesture}>
        <View style={styles.box} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
};
const Trending = () => {
  return (
    <View>
      <Text>Trening</Text>
    </View>
  );
};

const Home = () => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Following" component={Following} />
      <TopTab.Screen name="Trending" component={Trending} />
    </TopTab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
});
