import React from 'react'
import ExpenseListItem from '../../components/ExpenseListItem'
import { shallow } from 'enzyme'
import mockExpenses from '../fixtures/expenses'

test('Should render list item correctly', ()=> {
    const wrapper = shallow(<ExpenseListItem {...mockExpenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})