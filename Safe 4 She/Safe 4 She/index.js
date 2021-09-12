/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './Splash'
import indexpage from './indexpage'
import Register_page from './Register_page'
import pagemail from './pagemail'
import Home_stack from './Home_stack'
import Home_drawer from './Home_drawer'
import Contact from './Contact'
import Video_page from './Video_page'
import Cam_home from './Cam_home'
import Choosepic from './Choosepic'
import testpic from './testpic'
import Userhome from './Userhome'
import Contactlist from './Contactlist'
import ListItem from './components/ListItem'
import Avatar from './components/Avatar';
import  Alarm from './Alarm';





AppRegistry.registerComponent(appName, () => Home_stack);
