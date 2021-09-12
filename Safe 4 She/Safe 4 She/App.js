import RNShake from 'react-native-shake';


// For v4.x.x onwards:
class MyComponent extends React.Component {
  componentDidMount() {
    RNShake.addEventListener(() => {
      // Your code...
    });
  }

  componentWillUnmount() {
    RNShake.removeEventListener();
  }
}