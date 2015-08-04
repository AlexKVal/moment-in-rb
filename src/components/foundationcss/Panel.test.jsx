import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'

import Panel from './Panel'

describe('Component: Panel', () => {
  it('has "panel" class', () => {
    const instance = TestUtils.renderIntoDocument(<Panel/>)
    const node = React.findDOMNode(instance)
    assert.equal(node.getAttribute('class'), 'panel')
    assert.notOk(node.className.match(/\bcallout\b/))
  })

  it('is a "div" element', () => {
    const instance = TestUtils.renderIntoDocument(<Panel/>)
    assert.equal(React.findDOMNode(instance).nodeName, 'DIV')
  })

  it('renders its children', () => {
    const instance = TestUtils.renderIntoDocument(
      <Panel>
        <p>child1</p>
        <p>child2</p>
      </Panel>
    )
    const node = React.findDOMNode(instance)
    assert.equal(node.children.length, 2)
    assert.equal(node.firstChild.textContent, 'child1')
    assert.equal(node.lastChild.innerText, 'child2')
  })

  it('has "callout" class with "callout" property set', () => {
    const instance = TestUtils.renderIntoDocument(<Panel callout />)
    const node = React.findDOMNode(instance)
    assert.ok(node.className.match(/\bpanel\b/))
    assert.ok(node.className.match(/\bcallout\b/))
  })
})
