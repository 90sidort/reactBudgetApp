import configurMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import {
    addExpense,
    editExpense,
    removeExpense,
    startAddExpense,
    setExpenses,
    startSetExpense,
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses'
import mockExpenses from '../fixtures/expenses'

const createMockStore = configurMockStore([thunk])
const testUID = 'testUser'
const defaultAuthState = { auth: { uid: testUID }}

beforeEach((done) => {
    const expenseData = {}
    mockExpenses.forEach(({ id, category, description, note, amount, createdAt}) => {
        expenseData[id] = { description, category, note, amount, createdAt }
    })
    database.ref(`users/${testUID}/expenses`).set(expenseData).then(() => done())
})

afterEach((done) => {
    database.ref(`users/${testUID}/expenses`).set({}).then(() => done())
})

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
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: "First expense",
        category: 'travel',
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
        return database.ref(`users/${testUID}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Should add expense with default data to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: '',
        category: 'other',
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
        return database.ref(`users/${testUID}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Should set expenses correctly', () => {
    const result = setExpenses(mockExpenses)
    expect(result).toEqual({
        type: 'SET_EXPENSES',
        expenses: mockExpenses
    })
})

test('Should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: mockExpenses
        })
        done()
    })
})

test('Should correctly delete expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startRemoveExpense({id: mockExpenses[0].id})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: mockExpenses[0].id
        })
        done()
    })
})

test('Should correctly edit expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startEditExpense(mockExpenses[0].id, {amount: 999})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: mockExpenses[0].id,
            updates: {amount: 999}
        })
        done()
    })
})

