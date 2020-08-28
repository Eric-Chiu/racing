import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import _ from 'lodash';
import CircleIndicator from './circleIndicator';

interface IProps {
  size: number;
  color: string;
  score: number;
}

class HorseRate extends Component<IProps> {
  static defaultProps = {
    size: 200,
    color: '#183199',
    score: 100,
  };

  private clacRate = (score: number) => {
    const rateRange = {A: [100, 90], B: [90, 80], C: [80, 70], D: [70, 0]};
    const rate = _.reduce(
      rateRange,
      function (result: string, value: number[], key: string) {
        if (value[0] >= score && value[1] < score) {
          result = key;
        }
        return result;
      },
      '',
    );
    return rate;
  };

  public render() {
    const {size, score, color, ...rest} = this.props;
    const rate = this.clacRate(score);
    const textColor = color;
    return (
      <View style={[styles.container, {height: size, width: size}]}>
        <View style={styles.indicator}>
          <CircleIndicator
            size={size}
            percent={score}
            color1={color}
            {...rest}
          />
        </View>
        <Text
          style={[
            styles.rate,
            {color: textColor, fontSize: size / 2, marginBottom: size / 10},
          ]}>
          {rate}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
  },
  rate: {
    fontWeight: 'bold',
  },
});
export default HorseRate;
