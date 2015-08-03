import React, { PropTypes } from 'react'

const Row = React.createClass({
  propTypes: {
    // TODO: make it possible to only 'column/columns'
    children: PropTypes.node
  },

  render () {
    return (
      <div className='row'>
        {this.props.children}
      </div>
    )
  }
})

export default Row
