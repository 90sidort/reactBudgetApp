import configurMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses'
import mockExpenses from '../fixtures/expenses'

const createMockStore = configurMockStore([thunk])

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should set up edit expense action object', () => {
    const action = editExpense('123abc', {amount: 500})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:  {amount: 500}
    })
})

test('Should set up add expense action object with data', () => {
    const action = addExpense(mockExpenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: mockExpenses[1]
    })
})

test('Should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: "First expense",
        note: 'TestNote1',
        amount: 100,
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Should add expense with default data to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})
