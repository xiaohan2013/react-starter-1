/*global
describe
expect
it
jest
*/

jest.disableAutomock()

// Dependencies.
import React from 'react'
import T from 'react-addons-test-utils'

// UI components.
import FieldsetWarn from '../source/components/fieldset_warn'

// Describe `<Component/>` name.
describe('FieldsetWarn', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <FieldsetWarn>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </FieldsetWarn>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-box--warn')

  // Get content.
  const content = parent.querySelectorAll('p')

  // Get legend.
  const legend = parent.querySelectorAll('legend')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==================
  // Test for fieldset.
  // ==================

  it('uses a fieldset tag', function () {
    const tag = parent.tagName.toLowerCase()

    expect(tag).toBe('fieldset')
  })

  // ================
  // Test for legend.
  // ================

  it('has a legend', function () {
    expect(legend.length).toBe(1)
  })

  // =================
  // Test for content.
  // =================

  it('has content', function () {
    expect(content.length).toBe(2)
  })
})
