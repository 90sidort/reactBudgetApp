import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../ExpenseDashboardPage'
import AddExpensePage from '../AddExpensePage'
import EditExpensePage from '../EditExpensePage'
import HelpPage from '../HelpPage'
import NotFoundPage from '../404'
import Login from '../Login'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter