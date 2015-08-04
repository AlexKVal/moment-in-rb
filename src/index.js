import './styles.css'

import React from 'react'
import Row from './components/foundationcss/Row'
import Column from './components/foundationcss/Column'
import Panel from './components/foundationcss/Panel'
import CalendarSvg from './components/CalendarSvg'

const MainPage = React.createClass({
  render () {
    return (
      <Row>
        <Column>
          <Panel callout>
            <CalendarSvg />
            <h4>Raw Date</h4>
            <p>rawDate</p>
          </Panel>
          <Panel>
            <h4>Pretty Formatting</h4>
            <p>formattedDate</p>
          </Panel>
          <Panel callout>
            <h4>Day of Week</h4>
            <p>dayOfWeek</p>
          </Panel>
          <Panel>
            <h4>Day began...</h4>
            <p>hoursAgo</p>
          </Panel>
          <Panel callout>
            <h4>Days ends in...</h4>
            <p>timeFromNow</p>
          </Panel>
          <Panel>
            <h4>Calendar Time</h4>
            <p>calendarTime</p>
          </Panel>
          <Panel callout>
            <h4>Inspired by</h4>
            <a href='http://sahatyalkabov.com/jsrecipes/#!/backend/formatting-dates'>sahatyalkabov formatting-dates</a>
          </Panel>
        </Column>
      </Row>
    )
  }
})

React.render(<MainPage />, document.getElementById('application'), () => {
  console.log('finished mounting application')
})
