import moment from 'moment'

const getVisibleExpenses = (expenses, { text, minAmount, maxAmount, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = (expense.description).toLowerCase().includes(text.toLowerCase())
        const amountMatch = ((expense.amount) / 100) >= minAmount && ((expense.amount) / 100) <= maxAmount  

        return startDateMatch && endDateMatch && textMatch && amountMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses