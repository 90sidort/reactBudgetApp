import { shallow } from 'enzyme'
import React from 'react'
import {Header} from '../../components/Header'

test('Should render header correctly', () => {
    const wrapper = shallow(<Header startLogOut={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should call startLogout on button click', () => {
    const startLogoutSpy = jest.fn()
    const wrapper =  shallow(<Header startLogOut={startLogoutSpy}/>)
    wrapper.find('button').simulate('click')
    expect(startLogoutSpy).toHaveBeenCalled()
})