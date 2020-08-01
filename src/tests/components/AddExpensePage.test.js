import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import mockExpenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(< AddExpensePage addExpense={addExpense} history={history} />)
})

test('Should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle on Submit correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(mockExpenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(mockExpenses[0])
})