import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {StyleSheet, View} from 'react-native';

import {Header, Main} from '../components/home-view';
import Actions from '../actions';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  componentDidMount() {
    this.currentRoute = this.props.navigator.navigationContext.currentRoute;
    // this.bindEvents();
    // this.props.actions.fetchAllTodos();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props}/>
        <Main {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

function mapStateToProps(state) {
  return {todos: state.todos};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
