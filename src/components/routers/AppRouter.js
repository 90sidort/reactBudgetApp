import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import ExpenseDashboardPage from '../ExpenseDashboardPage'
import AddExpensePage from '../AddExpensePage'
import EditExpensePage from '../EditExpensePage'
import HelpPage from '../HelpPage'
import NotFoundPage from '../404'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter