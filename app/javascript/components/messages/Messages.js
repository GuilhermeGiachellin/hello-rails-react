import React from "react"
import PropTypes from "prop-types"
class Messages extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

Messages.propTypes = {
  greeting: PropTypes.string
};
export default Messages
