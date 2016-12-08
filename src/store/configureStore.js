/**
 * Created by AaronYuan on 02/12/2016.
 */
import {
  AsyncStorage
} from 'react-native';
import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  persistStore,
  autoRehydrate,
} from 'redux-persist';
import reducers from '../reducers';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

var middlewares = compose(applyMiddleware(thunk, logger), autoRehydrate());

export default function configureStore() {
  const store = createStore(reducers, undefined, middlewares);
  persistStore(store, {
    storage: AsyncStorage,
  });
  if (isDebuggingInChrome) {
    window.store = store;
  }
  console.log(store, store.getState());
  return store;
}
