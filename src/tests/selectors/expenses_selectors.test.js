import getVisibleExpenses from '../../selectors/expenses'
import mockedExpenses from '../fixtures/expenses'
import moment from 'moment'

test("Should filter by text value", () => {
    const filters = {
        text: 'expense',
        category: 'all',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        minAmount:0,
        maxAmount: 10000
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(2)
    expect(result).toEqual([mockedExpenses[0], mockedExpenses[1]])
})

test("Should filter by start date", () => {
    const filters = {
        text: '',
        category: 'all',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
        minAmount:0,
        maxAmount: 10000
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(2)
    expect(result).toEqual([mockedExpenses[2], mockedExpenses[0]])
})

test("Should filter by start date", () => {
    const filters = {
        text: '',
        category: 'all',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0),
        minAmount:0,
        maxAmount: 10000
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(2)
    expect(result).toEqual([mockedExpenses[0], mockedExpenses[1]])
})

test("Should sort by date", () => {
    const filters = {
        text: '',
        category: 'all',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        minAmount:0,
        maxAmount: 10000
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(3)
    expect(result).toEqual([mockedExpenses[2], mockedExpenses[0], mockedExpenses[1]])
})

test("Should filter by amount", () => {
    const filters = {
        text: '',
        category: 'all',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        minAmount:0,
        maxAmount: 10000
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(3)
    expect(result).toEqual([mockedExpenses[2], mockedExpenses[1], mockedExpenses[0]])
})

test("Should filter by min amount", () => {
    const filters = {
        text: '',
        category: 'all',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        minAmount: 9,
        maxAmount: 10000
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(2)
    expect(result).toEqual([mockedExpenses[2], mockedExpenses[1]])
})

test("Should filter by max amount", () => {
    const filters = {
        text: '',
        category: 'all',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        minAmount: 0,
        maxAmount: 10
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(2)
    expect(result).toEqual([mockedExpenses[1], mockedExpenses[0]])
})

test("Should filter by category", () => {
    const filters = {
        text: '',
        category: 'food',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        minAmount: 0,
        maxAmount: 10
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(1)
    expect(result).toEqual([mockedExpenses[1]])
})

test("Should filter by category (all)", () => {
    const filters = {
        text: '',
        category: 'all',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        minAmount: 0,
        maxAmount: 10000
    }
    const result = getVisibleExpenses(mockedExpenses, filters)
    expect(result.length).toBe(3)
    expect(result).toEqual([mockedExpenses[2], mockedExpenses[1], mockedExpenses[0]])
})