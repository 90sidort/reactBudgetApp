import moment from 'moment'

const expenses = [{
    id: '1',
    description: "First expense",
    note: 'TestNote1',
    amount: 100,
    createdAt: 0
},
{
    id: '2',
    description: "Second expense",
    note: '',
    amount: 1000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: "Third",
    note: '',
    amount: 3100,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses 