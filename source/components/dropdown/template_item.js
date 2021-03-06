// Dependencies.
import React from 'react'

// Define class.
class DropDownItem extends React.Component {
  // Click handler.
  handleClick (e) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    const text = this.props.text

    handleClick(e, text)
  }

  // Render method.
  render () {
    const href = this.props.href
    const text = this.props.text

    const handleClick = this.handleClick.bind(this)

    // Expose UI.
    return (
      <li
        role='menuitem'
        className='t7-dropdown__menu__item'
      >
        <a
          className='t7-dropdown__menu__link'

          href={href}
          tabIndex='0'

          onClick={handleClick}
          onKeyDown={handleClick}
        >
          {text}
        </a>
      </li>
    )
  }

}

// Validation.
DropDownItem.propTypes = {
  href: React.PropTypes.string,
  text: React.PropTypes.string,
  handleClick: React.PropTypes.func
}

// Export
export default DropDownItem
