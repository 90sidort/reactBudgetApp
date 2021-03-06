// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SET_MIN_AMOUNT
export const setMinAmount = (minAmount = 0) => ({
    type: 'SET_MIN_AMOUNT',
    minAmount
})

//SET_CATEGORY
export const setCategory = (category = "all") => ({
    type: 'SET_CATEGORY',
    category
})

//SET_MAX_AMOUNT
export const setMaxAmount = (maxAmount = 10000) => ({
    type: 'SET_MAX_AMOUNT',
    maxAmount
})

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})
// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})