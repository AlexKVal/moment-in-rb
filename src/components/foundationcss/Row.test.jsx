import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'

import Row from './Row'

describe('Component: Row', () => {
  it('has "row" class', () => {
    const instance = TestUtils.renderIntoDocument(<Row/>)
    const node = React.findDOMNode(instance)
    // assert.ok(node.className.match(/\brow\b/))
    assert.equal(node.getAttribute('class'), 'row')
  })

  it('is a "div" element', () => {
    const instance = TestUtils.renderIntoDocument(<Row/>)
    assert.equal(React.findDOMNode(instance).nodeName, 'DIV')
  })

  it('renders its children', () => {
    const instance = TestUtils.renderIntoDocument(
      <Row>
        <p>child1</p>
        <p>child2</p>
      </Row>
    )
    const node = React.findDOMNode(instance)
    assert.equal(node.children.length, 2)
    assert.equal(node.firstChild.textContent, 'child1')
    assert.equal(node.lastChild.innerText, 'child2')
  })
})
