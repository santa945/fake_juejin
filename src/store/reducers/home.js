import { UPDATE_TAB, SET_GOODS_LIST } from '../../actions/common'

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
        case SET_GOODS_LIST:
            return { ...state, goodlist: action.payload }
        default:
            return state
    }
}

export default cityReducers