/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {App} from './src/App';
import './src/i18n/i18n';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
