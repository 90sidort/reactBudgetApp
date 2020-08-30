import moment from 'moment'

export const emptyFilters = {
    text: '',
    category: "all",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export const setFilters = {
    text: 'bill',
    category: "all",
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}