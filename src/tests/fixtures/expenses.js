import moment from 'moment'

const expenses = [{
    id: '1',
    description: "First expense",
    category: 'other',
    note: 'TestNote1',
    amount: 100,
    createdAt: 0
},
{
    id: '2',
    description: "Second expense",
    category: 'food',
    note: '',
    amount: 1000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    category: 'travel',
    description: "Third",
    note: '',
    amount: 3100,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses 