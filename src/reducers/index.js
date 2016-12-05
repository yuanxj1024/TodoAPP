/**
 * Created by AaronYuan on 02/12/2016.
 */
import {
  combineReducers
} from 'redux';
import navigation from './navigation';
import todos from './todos';


const rootReducer = combineReducers({
  navigation,
  todos
});

export default rootReducer;
