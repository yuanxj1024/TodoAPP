/**
 * Created by AaronYuan on 29/11/2016.
 */
import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {Provider} from 'react-redux';
// import {Header,Main} from "./components/home-view";
import HomeView from './containers/HomeView';

// import App from './containers/App';
import configureStore from './store/configureStore';

class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={styles.container}>
          <HomeView></HomeView>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  }
});

export default Root;
