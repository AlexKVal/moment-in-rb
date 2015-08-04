import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'

import Column from './Column'

describe('Component: Column', () => {
  it('has "column" class', () => {
    const instance = TestUtils.renderIntoDocument(<Column/>)
    const node = React.findDOMNode(instance)
    // assert.ok(node.className.match(/\bcolumn\b/))
    assert.equal(node.getAttribute('class'), 'column')
  })

  it('is a "div" element', () => {
    const instance = TestUtils.renderIntoDocument(<Column/>)
    assert.equal(React.findDOMNode(instance).nodeName, 'DIV')
  })

  it('renders its children', () => {
    const instance = TestUtils.renderIntoDocument(
      <Column>
        <p>child1</p>
        <p>child2</p>
      </Column>
    )
    const node = React.findDOMNode(instance)
    assert.equal(node.children.length, 2)
    assert.equal(node.firstChild.textContent, 'child1')
    assert.equal(node.lastChild.innerText, 'child2')
  })
})
