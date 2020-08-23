import { NavLink } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux'
import { startLogOut } from '../actions/auth'

export const Header = ({ startLogOut }) => (
    <header className="header">
    <div className="headerContent">
        <div className="headerMenu">
            <h1>Expensify</h1>
            <NavLink to="/dashboard" activeClassName="is-active" className="linkElement">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active" className="linkElement">Create expense</NavLink>
            <NavLink to="/help" activeClassName="is-active" className="linkElement">Help</NavLink>
        </div>
            <button className="buttonLogout" onClick={startLogOut}>Logout</button>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(Header)