import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startLogUser } from '../actions/auth'

export const Login = ({ startLogin, startLogUser }) => (
         <div className="boxLayout">
         <div className="boxLayoutBox">
            <h1 className="boxLayoutTitle">Expensify</h1>
            <p>Control your finance!</p>
            <button className="buttonLogin" onClick={startLogin}>Log in with Google</button>
            <button className="buttonLogin" onClick={startLogUser}>Test user</button>
         </div>
        </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLogUser: () => dispatch(startLogUser())
})

export default connect(undefined, mapDispatchToProps)(Login)