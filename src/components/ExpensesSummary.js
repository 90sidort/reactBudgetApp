import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/selectExpensesTotal'
import numeral from 'numeral'

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const isSingle = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedSum = numeral(expensesTotal / 100).format('$0,0.00')
    return(
        <div className="pageHeader">
            <div className="summaryContent">
                <p className="pageHeaderTitle">Viewing <span>{expensesCount}</span> {isSingle}, totaling <span>{formattedSum}</span>.</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)