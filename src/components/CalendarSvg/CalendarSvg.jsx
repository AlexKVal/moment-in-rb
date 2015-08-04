import './CalendarSvg.css'
import React from 'react'
import calendarIconUrl from '../../svg/calendar-clock.svg'

const CalendarSvg = React.createClass({
  render () {
    return (
      <img className='calendar-svg'
        src={calendarIconUrl}
        alt='calendar icon' />
    )
  }
})

export default CalendarSvg
