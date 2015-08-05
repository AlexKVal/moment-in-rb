import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'

import CalendarSvg from './CalendarSvg'

describe('Component: CalendarSvg', () => {
  it('has "calendar-svg" class', () => {
    const instance = TestUtils.renderIntoDocument(<CalendarSvg/>)
    const node = React.findDOMNode(instance)
    assert.equal(node.getAttribute('class'), 'calendar-svg')
  })

  it('is a "img" element', () => {
    const instance = TestUtils.renderIntoDocument(<CalendarSvg/>)
    assert.equal(React.findDOMNode(instance).nodeName, 'IMG')
  })

  it('has "alt" text', () => {
    const instance = TestUtils.renderIntoDocument(<CalendarSvg/>)
    const node = React.findDOMNode(instance)
    assert.equal(node.getAttribute('alt'), 'calendar icon')
  })
})
