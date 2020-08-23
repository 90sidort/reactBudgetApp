import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => {

    return(
        <div className="content-container list_body">
        <div className="list-header">
            <div className="show_for_mobile">Expenses</div>
            <div className="show_for_desktop">Expense</div>
            <div className="show_for_desktop">Amount</div>
        </div>
            {
                props.expenses.length === 0 ? (
                    <p className="list_item_empty">No expenses</p>
                ) : (
                    props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense}/>
                ))
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList) 

export default ConnectedExpenseList