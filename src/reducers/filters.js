import moment from 'moment'
// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    category: 'all',
    minAmount: 0,
    maxAmount: 10000,
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_MIN_AMOUNT':
            return {
                ...state,
                minAmount: action.minAmount
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.category
            }
        case 'SET_MAX_AMOUNT':
            return {
                ...state,
                maxAmount: action.maxAmount
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

export default filtersReducer