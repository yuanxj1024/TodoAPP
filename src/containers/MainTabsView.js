import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import HomeVew from './HomeView';
import {Main} from '../components/main-tabs-view';
import Actions from '../actions';
