import React, { PropTypes } from 'react'
import Panel from '../foundationcss/Panel'
import CalendarSvg from '../CalendarSvg'

const PanelWithCalendar = React.createClass({
  propTypes: {
    callout: PropTypes.bool,
    children: PropTypes.node
  },

  render () {
    return (
      <Panel callout={this.props.callout}>
        <CalendarSvg />
        {this.props.children}
      </Panel>
    )
  }
})

export default PanelWithCalendar
