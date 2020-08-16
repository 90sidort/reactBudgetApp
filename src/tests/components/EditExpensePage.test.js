import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import mockExpenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, wrapper, history

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={mockExpenses[0]}
    />)
})


test('Should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle editExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(mockExpenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(mockExpenses[0].id, mockExpenses[0])
})

test('Should handle startRemoveExpense correctly', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: mockExpenses[0].id})
})