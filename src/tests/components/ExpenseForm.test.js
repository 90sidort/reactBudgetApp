import ExpenseForm from '../../components/ExpenseForm'
import { shallow } from 'enzyme'
import React from 'react'
import mockExpenses from '../fixtures/expenses'
import moment from 'moment'

test('Should render ExpenseForm with no data correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm with data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={mockExpenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('Should set description on input change', () => {
    const value = 'Test description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('Should set note on input change', () => {
    const value = 'Test note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})

test('Should set amount on valid input change', () => {
    const value = '100.00'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Should not set amount on invalid input change', () => {
    const value = '100.000'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={mockExpenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: mockExpenses[0].description,
        category: mockExpenses[0].category,
        amount: mockExpenses[0].amount,
        note: mockExpenses[0].note,
        createdAt: mockExpenses[0].createdAt
    })
})

test('Should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true})
    expect(wrapper.state('focusedCalendar')).toEqual(true)
})