import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Panel = React.createClass({
  propTypes: {
    /**
     * Makes 'callout' from panel
     */
    callout: PropTypes.bool,
    children: PropTypes.node
  },

  render () {
    return (
      <div className={classNames({callout: this.props.callout}, 'panel')}>
        {this.props.children}
      </div>
    )
  }
})

export default Panel
