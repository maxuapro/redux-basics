import * as actions from './actionTypes'



export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description: description
    }
})

export const bugRemoved = id => ({
    type: actions.BUG_REMOVE,
    payload: {
        id: id
    }
})

export const bugResolved = id => ({
    type: actions.BUG_RESOLVE,
    payload: {
        id: id
    }
})
