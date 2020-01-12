import { combineReducers } from 'redux';
import leads from './leads';


export default combineReducers({
    leads: leads
//    the same as just saying `leads`
});
