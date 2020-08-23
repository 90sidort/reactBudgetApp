import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({id, description, note, amount, createdAt}) => {
    return (
        <Link to={`/edit/${id}`} className="list_item">
            <div>
                <h3 className="list_item_description">{description}</h3>
                { note.length > 0 && <p className="list_item_notes"><small>{note}</small></p> }
                <span>{moment(createdAt).format('Do MMMM YYYY')}</span>
            </div>
            <h3 className="list_item_amount">{numeral(amount / 100).format('$0,0.00')}</h3>
        </Link> 
    )
}

export default ExpenseListItem