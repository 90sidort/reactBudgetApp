import React from 'react'
import { connect } from 'react-redux'
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
    setMinAmount,
    setMaxAmount
} from '../actions/filters'
import { DateRangePicker } from 'react-dates'
import ReactSlider from 'react-slider'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        if(e.target.value === 'amount'){this.props.sortByAmount()}
        else {this.props.sortByDate()}
    }
    OnValuesChange = (value) => {
        this.props.setMinAmount(value[0])
        this.props.setMaxAmount(value[1])
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            className="text-input"
                            type="text"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                            placeholder="Filter expenses"
                        />
                    </div>
                    <div className="input-group__item">
                        <select value={this.props.filters.sortBy} onChange={this.onSortChange} className="text-select">
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
                <div>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={[this.props.filters.minAmount, this.props.filters.maxAmount]}
                        step={100}
                        max={10000}
                        minDistance={100}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        pearling
                        minDistance={10}
                        onChange={this.OnValuesChange}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({filters: state.filters})

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setMinAmount: (minValue) => dispatch(setMinAmount(minValue)),
    setMaxAmount: (maxValue) => dispatch(setMaxAmount(maxValue)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)