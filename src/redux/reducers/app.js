//Import an action to reducers

import {
    //SET_METEO_LOADED,
} from '../actions/index';

const initialState = {
    //It's mandatory to initialize every state you will have in your app
    //modulesLoaded: {
    //    meteoLoaded: false,
    //    moneyLoaded: false,
    //    agendaLoaded: false,
    //    transportsLoaded: false,
    //    todoLoaded: false,
    //    contactsLoaded: false
    //},
    //widgets: {
    //    draggable: false
    //},
    //menu: {
    //    overlay: {
    //        x: 0,//
    //        y: 0
    //    },
    //    isOpen: false
    //}
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