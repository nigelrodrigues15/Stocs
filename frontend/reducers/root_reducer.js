import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import companyReducer from './company_reducer';

const rootReducer = combineReducers({

    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    companies: companyReducer
    
});

export default rootReducer;