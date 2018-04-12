import React, { Component } from "react"

class ButtonSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textVisible: false
    }
  }

  handleClick = () => {
    const textVisible = !this.state.textVisible
    this.setState({ textVisible })
  }

  render() {
    return (
      <div>
        <button id="toggle" onClick={this.handleClick}>
          <h3>{this.state.textVisible ? "Hide Text" : "Show Text"}</h3>
        </button>
        {this.state.textVisible && <h2>It's working!</h2>}
      </div>
    )
  }
}

export default ButtonSwitch
