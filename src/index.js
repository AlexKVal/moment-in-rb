import './styles.css'

import React from 'react'
import Row from './components/foundationcss/Row'

const MainPage = React.createClass({
  render () {
    return (
      <Row>
        <div className='columns'>
          <div className='panel callout'>
            <h4>Raw Date</h4>
            <p>rawDate</p>
          </div>
          <div className='panel'>
            <h4>Pretty Formatting</h4>
            <p>formattedDate</p>
          </div>
          <div className='panel callout'>
            <h4>Day of Week</h4>
            <p>dayOfWeek</p>
          </div>
          <div className='panel'>
            <h4>Day began...</h4>
            <p>hoursAgo</p>
          </div>
          <div className='panel callout'>
            <h4>Days ends in...</h4>
            <p>timeFromNow</p>
          </div>
          <div className='panel'>
            <h4>Calendar Time</h4>
            <p>calendarTime</p>
          </div>
          <div className='panel callout'>
            <h4>Inspired by</h4>
            <a href='http://sahatyalkabov.com/jsrecipes/#!/backend/formatting-dates'>sahatyalkabov formatting-dates</a>
          </div>
        </div>
      </Row>
    )
  }
})

React.render(<MainPage />, document.getElementById('application'), () => {
  console.log('finished mounting application')
})
