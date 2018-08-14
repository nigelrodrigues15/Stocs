import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import companyReducer from './company_reducer';
import stocksReducer from './stocks_reducer';
import watchlistReducer from './watchlist_reducer';

const rootReducer = combineReducers({

    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    companies: companyReducer,
    stocks: stocksReducer,
    watchlist: watchlistReducer
});

export default rootReducer;