import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { emptyFilters, setFilters } from '../fixtures/filters'

let setTextFilter, setCategory, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper, setMinAmount, setMaxAmount

beforeEach(() => {
    setTextFilter = jest.fn()
    setCategory = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setMinAmount = jest.fn()
    setMaxAmount = jest.fn()
    wrapper= shallow(
        <ExpenseListFilters
            filters={emptyFilters}
            setCategory={setCategory}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setMinAmount = {setMinAmount}
            setMaxAmount = {setMaxAmount}
        />)
})

test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters with setFilters correctly', () => {
    wrapper.setProps({
        filters: setFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should handle setTextFilter correctly', () => {
    const newText = 'water'
    wrapper.find('input').at(0).simulate('change', { target : { value: newText }})
    expect(setTextFilter).toHaveBeenLastCalledWith(newText)
})

test('Should handle sortByDate correctly', () => {
    wrapper.find('select').at(0).simulate('change', { target: { value: 'date' } })
    expect(sortByDate).toHaveBeenCalled()
})

test('Should handle sortByAmount correctly', () => {
    wrapper.find('select').at(0).simulate('change', { target: { value: 'amount' } })
    expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle setCategory correctly', () => {
    wrapper.find('select').at(1).simulate('change', { target: { value: 'taxes' } })
    expect(setCategory).toHaveBeenCalled()
})

test('Should handle date change', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: setFilters.startDate, endDate: setFilters.endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(setFilters.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(setFilters.endDate)
})

test('Should handle focus change', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('endDate')
    expect(wrapper.state('calendarFocused')).toBe('endDate')
})