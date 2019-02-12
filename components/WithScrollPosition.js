import React from 'react'
import PropTypes from 'prop-types'

function withScrollPosition(WrappedComponent, offset = { px: 0, location: 'center' }) {

    class withScrollPosition extends React.Component {
      constructor(props) {
        super(props)
        this.wrap = React.createRef()
        this.state = {
          isFocus: false,
          top: 0,
          bottom: 0
        }
      }
  
      componentDidMount() {
        if (typeof window !== "undefined") {
            const elPosition = this.wrap.current.myRef.current.getBoundingClientRect()
            const { scrollY } = this.props.windowData

            const top = elPosition.top + scrollY
            const bottom = elPosition.bottom + scrollY

            this.setState(() => ({ top, bottom }))

            let offsetValue = this.getOffsetValue()

            this.updateStateFocus(scrollY, top, bottom, offsetValue)
      }
    }

      componentDidUpdate() {
        const { top, bottom } = this.state
        const { scrollY } = this.props.windowData
        let offsetValue = this.getOffsetValue()

        this.updateStateFocus(scrollY, top, bottom, offsetValue)
      }

      updateStateFocus = (scrollY, top, bottom, offsetValue) => {
          if ( scrollY > top - offsetValue && 
                scrollY < bottom - offsetValue
            ) {
                this.setState(() => ({ isFocus: true }))
            } else {
                this.setState(() => ({ isFocus: false }))
            }
      }

      getOffsetValue = () => {
        const { innerHeight } = this.props.windowData

        // offset location sets an offset from window where to consider element should receive prop isFocus true
        let offsetValue = 
            offset.location === 'top'
                ? 0
                : offset.location === 'bottom' ? innerHeight : innerHeight / 2

        offsetValue += offset.px
        return offsetValue
      }
  
      render() {
        return (
          <WrappedComponent
            {...this.props}
            isFocus={this.state.isFocus}
            ref={this.wrap}
          />
        )
      }
    }

    withScrollPosition.displayName = `withScrollPosition(${getDisplayName(
        WrappedComponent
      )})`

      withScrollPosition.propTypes = {
        windowData: PropTypes.shape({
            scrollY: PropTypes.number.isRequired,
            innerHeight: PropTypes.number.isRequired,
            innerWidth: PropTypes.number.isRequired,
        })
    }
    
    return withScrollPosition
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component"
}



export default withScrollPosition