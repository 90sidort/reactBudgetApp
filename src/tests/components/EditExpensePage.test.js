import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import mockExpenses from '../fixtures/expenses'

let editExpense, removeExpense, wrapper, history

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
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
    expect(editExpense).toHaveBeenLastCalledWith(mockExpenses[0].id, mockExpenses[0])
})

test('Should handle removeExpense correctly', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id: mockExpenses[0].id})
})