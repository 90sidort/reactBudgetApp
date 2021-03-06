import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        category: 'all',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        maxAmount: 10000,
        minAmount: 0
    })
})

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
    const previousState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(previousState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('Should set text filter to specific string', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text:'test'})
    expect(state.text).toBe('test')
})

test('Should set text filter to empty string', () => {
    const previousState = {
        text: 'test',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(previousState, {type: 'SET_TEXT_FILTER', text:''})
    expect(state.text).toBe('')
})

test('Should set start date to a specific date', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0).valueOf()})
    expect(state.startDate).toBe(moment(0).valueOf())
})

test('Should set end date to a specific date', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0).valueOf()})
    expect(state.endDate).toBe(moment(0).valueOf())
})

test('Should set min amount to 100', () => {
    const state = filtersReducer(undefined, {type: 'SET_MIN_AMOUNT', minAmount: 100})
    expect(state.minAmount).toBe(100)
})

test('Should set min amount to 100', () => {
    const state = filtersReducer(undefined, {type: 'SET_MAX_AMOUNT', maxAmount: 1100})
    expect(state.maxAmount).toBe(1100)
})

test('Should set category to taxes', () => {
    const state = filtersReducer(undefined, {type: 'SET_CATEGORY', category: 'taxes'})
    expect(state.category).toBe('taxes')
})