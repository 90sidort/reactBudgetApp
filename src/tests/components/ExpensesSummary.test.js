import { ExpensesSummary } from '../../components/ExpensesSummary'
import React from 'react'
import { shallow } from 'enzyme'

test('Should work for no expenses', () => {
    const result = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0} />)
    expect(result).toMatchSnapshot()
})

test('Should work for single expense', () => {
    const result = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1032} />)
    expect(result).toMatchSnapshot()
})

test('Should work for multiply expenses', () => {
    const result = shallow(<ExpensesSummary expensesCount={10} expensesTotal={1000232} />)
    expect(result).toMatchSnapshot()
})