import React, {Component} from 'react';
import Svg, {Circle, LinearGradient, Stop, Defs, G} from 'react-native-svg';

interface IProps {
  size: number;
  color1: string;
  color2: string;
  percent: number;
  strokeSize: number;
}

class CircleIndicator extends Component<IProps> {
  static defaultProps = {
    size: 200,
    color1: '#183199',
    color2: '#3463A7',
    percent: 100,
    strokeSize: 0.05,
  };

  public render() {
    const viewBox = 500;
    const strokeWidth = viewBox * this.props.strokeSize;
    const radius = viewBox / 2 - strokeWidth;
    const perimeter = Math.PI * 2 * radius;
    const periPer = (perimeter * this.props.percent) / 100;
    return (
      <Svg
        width={this.props.size}
        height={this.props.size}
        viewBox={`0 0 ${viewBox} ${viewBox}`}>
        <Defs>
          <LinearGradient x1="1" y1="0" x2="0" y2="0" id="gradient1">
            <Stop offset="0%" stopColor={this.props.color1} />
            <Stop offset="100%" stopColor={this.props.color2} />
          </LinearGradient>
        </Defs>
        <G transform={`matrix(0,-1,1,0,0,${viewBox})`}>
          <Circle
            cx={viewBox / 2}
            cy={viewBox / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke="url(#gradient1)"
            fill="none"
            strokeDasharray={`${periPer} ${perimeter}`}
          />
        </G>
      </Svg>
    );
  }
}

export default CircleIndicator;
