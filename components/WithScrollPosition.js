import React from 'react'
import PropTypes from 'prop-types'

// fix top & bottom calc on resize

function withScrollPosition(WrappedComponent, offset) {

    const defaultOffset = { 
      px: 0, 
      location: "center", 
      keepFocus: false, // if true the prop isFocus will not go back to false
      checkWidthOnResize: false
    }

    offset = { ...defaultOffset, ...offset }

    class withScrollPosition extends React.Component {
      constructor(props) {
        super(props)
        this.wrapped = React.createRef()
        this.state = {
          isFocus: false,
          top: 0,
          bottom: 0
        }
      }
  
      componentDidMount() {
        if (typeof window !== "undefined") {
            const elPosition = this.wrapped.current.getBoundingClientRect()
            const { scrollY } = window

            const top = elPosition.top + scrollY
            const bottom = elPosition.bottom + scrollY

            this.setState(() => ({ top, bottom }))

            let offsetValue = this.getOffsetValue()

            this.updateStateFocus(scrollY, top, bottom, offsetValue)
      }
    }

      componentDidUpdate() {        
        if (offset.keepFocus && this.state.isFocus) {
          return
        }
        
        const { top, bottom } = this.state
        const { scrollY } = this.props
        let offsetValue = this.getOffsetValue()

        this.updateStateFocus(scrollY, top, bottom, offsetValue)
      }

      updateStateFocus = (scrollY, top, bottom, offsetValue) => {
        const isFocus = scrollY > top - offsetValue && scrollY < bottom - offsetValue

        if (isFocus === this.state.isFocus) return
          if (isFocus) {
                this.setState(() => ({ isFocus: true }))
            } else {
                this.setState(() => ({ isFocus: false }))
            }
      }

      getOffsetValue = () => {
        const { innerHeight } = window

        // offset location sets an offset from window where to consider element should receive prop isFocus true
        let offsetValue = 
            offset.location === 'top'
              ? 0
              : offset.location === 'bottom' 
              ? innerHeight 
              : innerHeight / 2

        offsetValue += offset.px
        return offsetValue
      }
  
      render() {
        return (
          <WrappedComponent
            {...this.props}
            isFocus={this.state.isFocus}
            ref={this.wrapped}
          />
        )
      }
    }

    withScrollPosition.displayName = `withScrollPosition(${getDisplayName(
        WrappedComponent
      )})`

      withScrollPosition.propTypes = {
        scrollY: PropTypes.number.isRequired,
    }
    
    return withScrollPosition
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component"
}



export default withScrollPosition