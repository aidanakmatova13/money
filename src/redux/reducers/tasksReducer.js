const initialState = {
    tasks: [],
    initialAmount: 400,
    costs: 0,
    currentBalance: 400,
    sort: 'asc'
}

export const tasksReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'ADD_COST':
            return
        default:
            return state
    }
}