import './styles.css'

import React from 'react'
import Row from './components/foundationcss/Row'
import Column from './components/foundationcss/Column'
import PanelWithCalendar from './components/PanelWithCalendar'

const MainPage = React.createClass({
  render () {
    return (
      <Row>
        <Column>
          <PanelWithCalendar callout>
            <h4>Raw Date</h4>
            <p>rawDate</p>
          </PanelWithCalendar>
          <PanelWithCalendar>
            <h4>Pretty Formatting</h4>
            <p>formattedDate</p>
          </PanelWithCalendar>
          <PanelWithCalendar callout>
            <h4>Day of Week</h4>
            <p>dayOfWeek</p>
          </PanelWithCalendar>
          <PanelWithCalendar>
            <h4>Day began...</h4>
            <p>hoursAgo</p>
          </PanelWithCalendar>
          <PanelWithCalendar callout>
            <h4>Days ends in...</h4>
            <p>timeFromNow</p>
          </PanelWithCalendar>
          <PanelWithCalendar>
            <h4>Calendar Time</h4>
            <p>calendarTime</p>
          </PanelWithCalendar>
          <PanelWithCalendar callout>
            <h4>Inspired by</h4>
            <a href='http://sahatyalkabov.com/jsrecipes/#!/backend/formatting-dates'>sahatyalkabov formatting-dates</a>
          </PanelWithCalendar>
        </Column>
      </Row>
    )
  }
})

React.render(<MainPage />, document.getElementById('application'), () => {
  console.log('finished mounting application')
})
