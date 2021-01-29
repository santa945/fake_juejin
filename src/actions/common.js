export const UPDATE_TAB = 'UPDATE_TAB'
export const SET_GOODS_LIST = 'SET_GOODS_LIST'

export function updateTab (currentTab) {
    return {
        type: UPDATE_TAB,
        payload: currentTab
    }
}

export default {
    updateTab
}