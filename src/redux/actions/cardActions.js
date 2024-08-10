export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

export const fetchCardsRequest = () => ({
    type: FETCH_CARDS_REQUEST
});

export const fetchCardsSuccess = (cards) => ({
    type: FETCH_CARDS_SUCCESS,
    payload: cards
});

export const fetchCardsFailure = (error) => ({
    type: FETCH_CARDS_FAILURE,
    payload: error
});

export const fetchCards = () => {
    return async (dispatch) => {
        dispatch(fetchCardsRequest());
        try {
            const response = await fetch('/api/cards');
            if (!response.ok) {
                throw new Error('Network response failure');
            }
            const cards = await response.json();
            dispatch(fetchCardsSuccess(cards));
        } catch (error) {
            dispatch(fetchCardsFailure(error.toString()));
        }
    };
};