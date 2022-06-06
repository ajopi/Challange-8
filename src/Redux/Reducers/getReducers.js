import { GET_DATA, GET_DATA_ORDERED } from "../Action/Types";

const initialState = {
    dataMobil: [],
    carDetail: []
}

const getReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                dataMobil: action.payload
            }
        case GET_DATA_ORDERED:
            return {
                ...state,
                carDetail: action.payload
            }
        default:
            return state
    }
}

export default getReducers