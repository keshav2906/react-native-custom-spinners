# Customized Loading Spinners

Customized React Native Loading Spinner like iOS. We are working on adding more customizable spinners in the future. Keep supporting.

## Getting started
Install the library using either Yarn:

```
yarn add react-native-custom-spinners
```

or npm:

```
npm install --save react-native-custom-spinners
```

## Usage
Import the library:

```javascript
import {Spinner, SpinnerOverlay, BouncyView} from "react-native-custom-spinners";
```
```javascript
<Spinner 
    visible={true} 
    color={'red'}
    mainContainerStyle={StylesProp}
    mainTitle = ''
    subTitle = ''
    mainContainerStyle ={StylesProp}
    mainTitleStyle = {StylesProp}
    subTitleStyle = {StylesProp}
    color = '#787878'
    width = {50}
    height = {50}
/>
```

Using Spinner Overlay:
(Here animation type can be 'none', 'fade' or 'slide')

```javascript
<SpinnerOverlay visible={true} animationType={'slide'}>
{props.children}
</SpinnerOverlay>
```

```javascript
<BouncyView
    visible={true}
    style={{
        width: '50%',
        height: '20%',
        borderRadius: 15,
        backgroundColor: 'orange',
    }}
>
{props.children}
</BouncyView>
```

## Maintainers

* [Keshav Nigam](https://github.com/keshav2906)

## License

The library is released under the MIT license. For more information see [`LICENSE`](/LICENSE).