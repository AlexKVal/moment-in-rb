import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'

import PanelWithCalendar from './PanelWithCalendar'

describe('Component: PanelWithCalendar', () => {
  it('has the first child the CalendarSvg img', () => {
    const instance = TestUtils.renderIntoDocument(
      <PanelWithCalendar>
        <p>child1</p>
        <p>child2</p>
      </PanelWithCalendar>
    )
    const node = React.findDOMNode(instance)
    assert.equal(node.children.length, 3)
    assert.equal(node.firstChild.nodeName, 'IMG')
    assert.equal(node.children[1].textContent, 'child1')
    assert.equal(node.lastChild.innerText, 'child2')
  })

  it('has "callout" class with "callout" property set', () => {
    const instance = TestUtils.renderIntoDocument(<PanelWithCalendar callout />)
    const node = React.findDOMNode(instance)
    assert.ok(node.className.match(/\bpanel\b/))
    assert.ok(node.className.match(/\bcallout\b/))
  })
})
