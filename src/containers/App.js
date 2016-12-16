/**
 * Created by AaronYuan on 29/11/2016.
 */
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Navigator
} from 'react-native';
import MainTabsView from './MainTabsView';
import EditView from './EditView';
import BroswerView from './BroswerView';

const ROUTES = {
  MainTabsView,
  BroswerView,
  EditView,
};


const App Extends Coponent {
  renderScene = (route, navigator) => {
    let Scene = ROUTER[route.name];
    return <Scene {...route} navigator={navigator} />;
  }

  configureScene = (route, routeStack) => {
    switch (route.name) {
      case 'EditView':
          return Navigator.SceneConfigs.FloatFromBottom;
        break;
      default:
        return Navigator.SceneConfigs.PushFromRight;
    }
  }

}
