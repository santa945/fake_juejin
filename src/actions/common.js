export const UPDATE_TAB = 'UPDATE_TAB'

export function updateTab (currentTab) {
    return {
        type: UPDATE_TAB,
        payload: currentTab
    }
}

export default {
    updateTab
}