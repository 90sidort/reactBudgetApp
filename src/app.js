import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './components/routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

store.dispatch(addExpense({description: 'Water bill', amount: 300}))
store.dispatch(addExpense({description: 'rent', amount: 1300, createdAt: 9999999}))
store.dispatch(addExpense({description: 'Gas bill', amount: 100, createdAt: 100}))
// store.dispatch(setTextFilter('bill'))
// store.dispatch(setTextFilter('water'))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));