import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HorseRate from './horseRate';
import CircleIndicator from './circleIndicator';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <CircleIndicator />
      </View>
      <View>
        <HorseRate size={300} score={85} />
      </View>
    </SafeAreaView>
  );
};

export default App;
