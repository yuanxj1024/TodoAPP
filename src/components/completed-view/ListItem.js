/**
 * 列表
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import Utils from '../../utils';
import {
  Theme,
  BasicStyle,
} from '../../styles';

class ListItem extends Component {
  handleDelete = () => {
    Alert.alert('Delete Item?',
      'This cannot be undone.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.props.actions.deleteTodo(this.props.data.id)}
      ]
    );
  }

  handleEdit = () => {
    this.props.navigator.push({
      name: 'EditView',
      data: this.props.data
    });
  }

  render() {
    const getTimer = () =>{
      return Utils.DateHandler.timeLogFromNowTo(new Date(this.props.data.completedTime || this.props.data.endTime));
    };
    return (
      <View style={[styles.container, {borderBottomWidth: this.props.isLast? 0: 1}]}>
        <TouchableHighlight
          activeOpacity={Theme.active.opacity}
          underlayColor="transparent"
          onPress={this.handleDelete}>
          <Image style={styles.btnIcon} source={require('./img/erase.png')} />
        </TouchableHighlight>
        <TouchableHighlight>
        </TouchableHighlight>
        <Text />
      </View>
    );
  }
}


export default ListItem;
