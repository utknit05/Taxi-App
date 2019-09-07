
// CONSTANTS
import { GET_CURRENT_LOCATION, GET_INPUT, TOGGLE_SEARCH_RESULTS, GET_ADDRESS_PREDICTIONS } from './constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ASPECT_RATION = width / height;

const LATITUDE_DELTA = 0.0432;
const LONGITUDE_DELTA = ASPECT_RATION * LATITUDE_DELTA;


// ACTIONS
export const getCurrentLocation = position => {
    const { latitude, longitude } = position;
    const region = {
		latitude,
		longitude,
		longitudeDelta: LONGITUDE_DELTA,
		latitudeDelta: LATITUDE_DELTA,
	}
    return {
    type: GET_CURRENT_LOCATION,
    payload: region,
    }
}

export const getInputData = payload => ({
    type: GET_INPUT,
    payload,
})

export const toggleSearchResults = payload => ({
    type: TOGGLE_SEARCH_RESULTS,
    payload,
})

export const getAddressPredictions = payload => ({
    type: GET_ADDRESS_PREDICTIONS,
    payload,
})

// REDUCERS
export const HomeReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CURRENT_LOCATION:
            return { ...state, region: action.payload };

        case GET_INPUT:
            const { key, val } = action.payload;
            return { ...state, inputData: { ...state.inputData, [key]: val } }

        case TOGGLE_SEARCH_RESULTS:
            return { ...state, resultsType: action.payload, predictions: [] } // try to modify predictions properly

        case GET_ADDRESS_PREDICTIONS:
            return { ...state, predictions: action.payload }

        default:
            return state;
    }
}
