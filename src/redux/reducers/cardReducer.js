import {
    FETCH_CARDS_REQUEST,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAILURE
} from '../actions/cardActions.js';

const initialState = {
    cardArray: [],
    loading: false,
    error: null,
    shuffledArray: []
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_CARDS_SUCCESS:
            return {
                ...state,
                cardArray: action.payload,
                loading: false
            };
        case FETCH_CARDS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default cardReducer;