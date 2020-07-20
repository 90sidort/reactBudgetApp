import expensesReducer from '../../reducers/expenses'
import expenseMock from '../fixtures/expenses'

test('Should correctly set expenses array when initializing', () => {
    const result = expensesReducer(undefined, { type: '@@INIT'})
    expect(result).toEqual([])
})

test('Should remove expense when id is valid', () => {
    const result = expensesReducer(expenseMock, { type: 'REMOVE_EXPENSE', id: '2'})
    expect(result).toEqual([expenseMock[0], expenseMock[2]])
})

test('Should not remove expense when id is not valid', () => {
    const result = expensesReducer(expenseMock, { type: 'REMOVE_EXPENSE', id: '212'})
    expect(result).toEqual(expenseMock)
})

test('Should add an expense', () => {
    const result = expensesReducer(undefined, { type: 'ADD_EXPENSE', expense: {id: '4', description: 'TestOne', note:"NoteOne", amount: 100, createdAt: 12345}})
    expect(result).toEqual([{id: '4', description: 'TestOne', note:"NoteOne", amount: 100, createdAt: 12345}])
})

test('Should edit an expense', () => {
    const result = expensesReducer(expenseMock, {type: 'EDIT_EXPENSE', id: '1', updates: {description: 'editedExpense'}})
    expect(result[0].description).toBe('editedExpense')
})

test('Should not edit an expense if id is invalid', () => {
    const result = expensesReducer(expenseMock, {type: 'EDIT_EXPENSE', id: '5', updates: {description: 'editedExpense'}})
    expect(result).toEqual(expenseMock)
})