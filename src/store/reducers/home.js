import { UPDATE_TAB } from '../../actions/common'

const defaultState = {
    currentCity: "广州",
    currentTab: 'home'
}

const cityReducers = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_CITY":
            return { ...state, currentCity: action.payload }
        case UPDATE_TAB:
            return { ...state, currentTab: action.payload }
        default:
            return state
    }
}

export default cityReducers