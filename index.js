import React from 'react';
import Svg, {Path} from 'react-native-svg';

const pathData = [
  {
    id: 0,
    d: 'M14.5 2V7',
  },
  {
    id: 1,
    d: 'M19.8003 9.19985L23.3379 5.66235',
  },
  {
    id: 2,
    d: 'M22 14.5H27.0002',
  },
  {
    id: 3,
    d: 'M19.8003 19.8L23.3379 23.3375',
  },
  {
    id: 4,
    d: 'M14.5 22V27',
  },
  {
    id: 5,
    d: 'M5.6626 23.3375L9.20021 19.8',
  },
  {
    id: 6,
    d: 'M2 14.5H7.00016',
  },
  {
    id: 7,
    d: 'M5.6626 5.66235L9.20021 9.19985',
  },
];

const Spinner = props => {
  const [count, setCount] = React.useState(-1);
  const [last, setLast] = React.useState(-1);
  const [secondLast, setSecondLast] = React.useState(-1);
  const intervalId = React.useRef(null);
  const primaryColor = props.primaryColor;
  const secondaryColor = props.secondaryColor;
  const lastColor = props.lastColor;
  const secondLastColor = props.secondLastColor;

  React.useEffect(() => {
    const increment = () => {
      setCount(prev => {
        const value = prev + 1;
        setPreceedingColors(value);
        if (prev === 7) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    };
    intervalId.current = setInterval(increment, 100);
    return () => {
      clearInterval(intervalId.current);
      setCount(-1);
    };
  }, []);

  const setPreceedingColors = value => {
    if (value === 0) {
      setLast(7);
      setSecondLast(6);
    } else if (value === 1) {
      setLast(0);
      setSecondLast(7);
    } else {
      setLast(value - 1);
      setSecondLast(value - 2);
    }
  };

  return props.visible ? (
    <Svg
      width={props.width ?? 50}
      height={props.height ?? 50}
      preserveAspectRatio="none"
      viewBox={'0 0 30 30'}>
      {pathData.map((item, index) => {
        return (
          <Path
            key={index}
            d={item.d}
            stroke={
              count === index
                ? primaryColor
                : index === last
                ? lastColor
                : index === secondLast
                ? secondLastColor
                : secondaryColor
            }
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
    </Svg>
  ) : null;
};

Spinner.defaultProps = {
  visible: true,
  primaryColor: 'rgba(120, 120, 120, 1)',
  secondaryColor: 'rgba(120, 120, 120, 0.3)',
  secondLastColor: 'rgba(120, 120, 120, 0.5)',
  lastColor: 'rgba(120, 120, 120, 0.7)',
};

export default Spinner;