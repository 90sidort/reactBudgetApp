import moment from 'moment'

const getVisibleExpenses = (expenses, { text, category, minAmount, maxAmount, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = (expense.description).toLowerCase().includes(text.toLowerCase())
        const minAmountMatch = ((expense.amount) / 100) >= minAmount
        const maxAmountMatch = maxAmount === 10000 ? true : ((expense.amount) / 100) <= maxAmount
        const categoryMatch = category === 'all' ? true : expense.category === category 

        return startDateMatch && endDateMatch && textMatch && minAmountMatch && maxAmountMatch && categoryMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses