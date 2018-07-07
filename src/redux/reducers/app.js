//Import an action to reducers

import {
    //SET_METEO_LOADED,
} from '../actions/index';

const initialState = {
    totalPoints: 0,
    numberOfTiles: 0,
    numberOfPlanets: 1,
    planet: {
        pointsPerSecond: 0,
        numberofTiles: 1,
        tileGroup: {
            tile: {
                multiplier: 0,
                pointsEarnedPerCompletion: 0
            }
        }
    }
};

export default function (state = { ...initialState }, action) {
    switch (action.type) {
        // Then we export the reducers and we can import it in any app
        //case SET_METEO_LOADED: {
        //    return {
        //        ...state,
        //        modulesLoaded: {
        //            ...state.modulesLoaded,
        //            meteoLoaded: action.loaded
        //        }
        //    }
        //}
        default:
            return state
    }
}