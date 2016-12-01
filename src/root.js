/**
 * Created by AaronYuan on 29/11/2016.
 */
import React, {Component} from "react";
import {View, Provider, StyleSheet} from "react-native";
import {Header} from "./components/home-view";

// import App from './containers/App';


class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
            </View>
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