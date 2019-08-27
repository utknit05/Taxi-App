
// CONSTANTS
import { GET_CURRENT_LOCATION } from './constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ASPECT_RATION = width / height;

const LATITUDE_DELTA = 0.0432;
const LONGITUDE_DELTA = ASPECT_RATION * LATITUDE_DELTA;


// ACTIONS
export const getCurrentLocation = (position) => {
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



// REDUCERS
export const HomeReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CURRENT_LOCATION:
            return { ...state, region: action.payload };

        default:
            return state;
    }
}
