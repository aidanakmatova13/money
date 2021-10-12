const initialState = {
    tasks: [],
    initialAmount: 400,
    costs: 0,
    currentBalance: 400,
    sort: 'asc'
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state,
                tasks: [...state.tasks, action.payload],
                currentBalance: state.currentBalance - action.payload.amount,
                costs: state.costs + +action.payload.amount
            }
        case 'CLEAR_ALL':
            return initialState
        case 'DELETE_ITEM':
            const deletedItem = state.tasks[action.payload]
            return {...state,
                tasks: state.tasks.filter((el, idx) => idx !== action.payload),
                currentBalance: state.currentBalance + +deletedItem.amount,
                costs: state.costs - +deletedItem.amount
            }
        default:
            return state
    }
}