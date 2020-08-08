import mockExpenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/selectExpensesTotal'

test('Should return 0 if no expenses', () => {
    const result = selectExpensesTotal()
    expect(result).toBe(0)
})

test('Should correctly add up single expense', () => {
    const result = selectExpensesTotal([mockExpenses[0]])
    expect(result).toBe(100)
})

test('Should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(mockExpenses)
    expect(result).toBe(4200)
})