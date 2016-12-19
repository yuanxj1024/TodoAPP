import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import HomeView from './HomeView';
import {Main} from '../components/main-tabs-view';
import Actions from '../actions';

class MainTabsView extends Component {
  renderTab = (idx) => {
    const {navigator} = this.props;
    switch (idx) {
      case 0:
        return <HomeView navigator={navigator}/>;
        break;
      case 1:
        return (
          <View>
            <Text>Completed</Text>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>BroswerView</Text>
          </View>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Main {...this.props} renderTab={this.renderTab}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {tab: state.navigation.index};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTabsView);
