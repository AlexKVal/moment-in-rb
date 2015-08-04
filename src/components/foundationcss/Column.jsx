import React, { PropTypes } from 'react'

const Column = React.createClass({
  propTypes: {
    children: PropTypes.node
  },

  render () {
    return (
      <div className='column'>
        {this.props.children}
      </div>
    )
  }
})

export default Column
