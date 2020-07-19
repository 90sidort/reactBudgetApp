import getVisibleExpenses from '../../selectors/expenses'
import mockedExpenses from '../fixtures/expenses'
import moment from 'moment'

test("Should filter by text value", () => {
    const filters = {
        text: 'expense',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(2)
    expect(result).toEqual([mockedExpenses[0], mockedExpenses[1]])
})

test("Should filter by start date", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(2)
    expect(result).toEqual([mockedExpenses[2], mockedExpenses[0]])
})

test("Should filter by start date", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(2)
    expect(result).toEqual([mockedExpenses[0], mockedExpenses[1]])
})

test("Should sort by date", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(3)
    expect(result).toEqual([mockedExpenses[2], mockedExpenses[0], mockedExpenses[1]])
})

test("Should filter by start date", () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(3)
    expect(result).toEqual([mockedExpenses[2], mockedExpenses[1], mockedExpenses[0]])
})