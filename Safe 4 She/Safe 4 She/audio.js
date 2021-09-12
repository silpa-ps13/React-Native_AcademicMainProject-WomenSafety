import Sound from 'react-native-sound';

Sound.setCategory('Ambient', true);

const buttonPress = new Sound(require('./components/au.mp3'), error => console.log(error));
export const playButtonPress = () => {
  buttonPress.play((success) =>{
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
}
buttonPress.stop(() => {
 
  buttonPress.play();
});

buttonPress.release();
