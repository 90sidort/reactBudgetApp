import { ExpenseList } from '../../components/ExpenseList'
import { shallow } from 'enzyme'
import React from 'react'
import mockExpenses from '../fixtures/expenses'

test('Should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={mockExpenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseList with no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})