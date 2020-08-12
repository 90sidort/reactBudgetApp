import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './components/routers/AppRouter'
import configureStore from './store/configureStore'
import './firebase/firebase'
// import { addExpense, removeExpense, editExpense } from './actions/expenses'
// import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate} from './actions/filters'
// import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

// store.dispatch(addExpense({description: 'Water bill', amount: 300}))
// store.dispatch(addExpense({description: 'rent', amount: 1300, createdAt: 9999999}))
// store.dispatch(addExpense({description: 'Gas bill', amount: 100, createdAt: 100}))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
