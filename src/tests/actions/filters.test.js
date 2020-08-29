import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate, setMaxAmount, setMinAmount } from '../../actions/filters'
import moment from 'moment'

test('Should correctly generate set end date object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should correctly generate set start date object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should correctly generate set text object with valid string', () => {
    const action = setTextFilter('Rent')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    })
})

test('Should correctly generate set text object with no string', () => {
    const action = setTextFilter('')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Should correctly generate set min amount object', () => {
    const action = setMinAmount(100)
    expect(action).toEqual({
        type: 'SET_MIN_AMOUNT',
        minAmount: 100
    })
})

test('Should correctly generate set max amount object', () => {
    const action = setMaxAmount(1000)
    expect(action).toEqual({
        type: 'SET_MAX_AMOUNT',
        maxAmount: 1000
    })
})

test('Should correctly generate set min amount object with default', () => {
    const action = setMinAmount()
    expect(action).toEqual({
        type: 'SET_MIN_AMOUNT',
        minAmount: 0
    })
})

test('Should correctly generate set max amount object with default', () => {
    const action = setMaxAmount()
    expect(action).toEqual({
        type: 'SET_MAX_AMOUNT',
        maxAmount: 10000
    })
})

test('Should correctly generate sort by date object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})

test('Should correctly generate sort by amount object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})