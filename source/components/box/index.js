// Dependencies.
import React from 'react'

// Utility methods.
import fake from '../../fake'
import utils from '../../utils'

// Define class.
class Box extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    this.state = {
      hidden: this.props.hidden || false,
      id: this.props.id || utils.unique()
    }
  }

  // Force state change.
  componentWillReceiveProps (nextProps) {
    const newHidden = nextProps.hidden
    const oldHidden = this.props.hidden

    const isValid =
      utils.exists(newHidden) &&
      newHidden !== oldHidden

    if (isValid) {
      this.setState({
        hidden: newHidden
      })
    }
  }

  // Close "X" event.
  handleClick (e) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const handleClick = this.props.handleClick

    this.setState({
      hidden: true
    })

    if (typeof handleClick !== 'function') {
      return
    }

    const id = this.state.id

    handleClick(e, id)
  }

  // Render method.
  render () {
    // State driven.
    const id = this.state.id
    const hidden = this.state.hidden

    // Props driven.
    const close = this.props.close
    const icon = this.props.icon
    const legend = this.props.legend
    const mode = this.props.mode

    // Used in conditional.
    var ariaHidden

    // Hidden?
    if (hidden) {
      ariaHidden = true
    }

    // Events.
    const handleClick = this.handleClick.bind(this)

    // Used in conditional.
    var className = [
      't7-box'
    ]

    // Mode: "info".
    if (mode === 'info') {
      className.push('t7-box--info')

      // Use "info" icon?
      if (icon) {
        className.push('t7-box--info--icon')
      }

    // Mode: "negative".
    } else if (mode === 'negative') {
      className.push('t7-box--negative')

      // Use "negative" icon?
      if (icon) {
        className.push('t7-box--negative--icon')
      }

    // Mode: "positive".
    } else if (mode === 'positive') {
      className.push('t7-box--positive')

      // Use "positive" icon?
      if (icon) {
        className.push('t7-box--positive--icon')
      }

    // Mode: "warn".
    } else if (mode === 'warn') {
      className.push('t7-box--warn')

      // Use "warn" icon?
      if (icon) {
        className.push('t7-box--warn--icon')
      }
    }

    // Build the string.
    className = className.join(' ')

    // Used in conditional.
    var closeX

    // Close "X" specified?
    if (close) {
      closeX = (
        <a
          aria-controls={id}
          aria-label='Close'
          title='Close'

          className='t7-box__close'
          tabIndex='0'
          onClick={handleClick}
          onKeyDown={handleClick}
        >Close</a>
      )
    }

    // Get child element(s).
    var children = this.props.children

    // Ensure at least a `<p>` exists.
    if (typeof children === 'string') {
      children = (
        <p>{children}</p>
      )
    }

    // Used in conditional.
    var box = (
      <div
        aria-hidden={ariaHidden}
        className={className}
        id={id}
      >
        {children}
        {closeX}
      </div>
    )

    // Is it a fieldset?
    if (legend) {
      box = (
        <fieldset
          aria-hidden={ariaHidden}
          className={className}
          id={id}
        >
          <legend title={legend}>
            {legend}
          </legend>

          {children}
          {closeX}
        </fieldset>
      )
    }

    // Expose the UI.
    return box
  }
}

// Validation.
Box.propTypes = {
  children: React.PropTypes.node,
  close: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  id: React.PropTypes.string,
  legend: React.PropTypes.string,
  mode: React.PropTypes.string,

  // Show/Hide.
  hidden: React.PropTypes.bool,

  // Events.
  handleClick: React.PropTypes.func
}

// Prop defaults.
Box.defaultProps = {
  children: fake.box()
}

// Export.
export default Box
