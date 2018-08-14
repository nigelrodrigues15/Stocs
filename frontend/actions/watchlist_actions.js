import * as WatchlistAPIUtil from "../util/watchlist_api_util";

export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const createWatchlist = (watchlistId) => dispatch => (
    WatchlistAPIUtil.createWatchlist(watchlistId)
    .then( payload => dispatch(recieveWatchlist(payload)))
);
export const recieveWatchlist = payload => {
    return {
        type: RECEIVE_WATCHLIST,
        payload
    };
};

export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS';
export const showWatchlist = () => dispatch => (
    WatchlistAPIUtil.showWatchlist()
    .then( payload => dispatch(recieveWatchlists(payload)))
);
export const recieveWatchlists = payload => {
    return {
        type: RECEIVE_WATCHLISTS,
        payload
    };
};

export const REMOVE_WATCHLIST = 'REMOVE_WATCHLIST';
export const removeWatchlist = (watchlistId) => dispatch => (
    WatchlistAPIUtil.removeWatchlist(watchlistId)
    .then( payload => dispatch(deleteWatchlist(payload)))
);
export const deleteWatchlist = payload => {
    return {
        type: REMOVE_WATCHLIST,
        payload
    };
};
