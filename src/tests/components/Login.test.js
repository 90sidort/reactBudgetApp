import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '../../components/Login'

test('Should correctly render component', () => {
    const result = shallow(<Login startLogin={() => {}}/>)
    expect(result).toMatchSnapshot()
})

test('Should call startLogin on button click', () => {
    const startLoginSpy = jest.fn()
    const wrapper =  shallow(<Login startLogin={startLoginSpy}/>)
    wrapper.find('button').simulate('click')
    expect(startLoginSpy).toHaveBeenCalled()
})