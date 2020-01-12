import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';


export default combineReducers({
    //    the same as just saying `leads`
    leads: leads,
    errors,
    messages
});
