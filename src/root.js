/**
 * Created by AaronYuan on 29/11/2016.
 */
import React, {Component} from "react";
import {View, StyleSheet,Text} from "react-native";
import {Provider} from 'react-redux';
// import {Header,Main} from "./components/home-view";
import HomeView from './containers/HomeView';
import App from './containers/App';


console.log('APP', App);

// import App from './containers/App';
import configureStore from './store/configureStore';

        // <View style={styles.container}>
        //   <HomeView></HomeView>
        // </View>
class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App/>
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
