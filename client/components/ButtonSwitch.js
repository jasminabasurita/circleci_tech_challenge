import React, { Component } from "react"

class ButtonSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textVisible: false,
      counter: 0
    }
  }

  handleClick = () => {
    const textVisible = !this.state.textVisible
    this.setState({ textVisible })
    const interval = setInterval(() => {
      const counter = this.state.counter + 4
      if (counter >= 360) {
        this.setState({ counter: 0 })
        clearInterval(interval)
      } else {
        this.setState({ counter })
      }
    }, 1)
  }

  render() {
    return (
      <div id="hero">
        <object
          type="image/svg+xml"
          style={{ transform: `rotate(${this.state.counter}deg)` }}
          data="/circleci.svg"
        />
        <div>
          <button id="toggle" onClick={this.handleClick}>
            <h3>{this.state.textVisible ? "Hide Text" : "Show Text"}</h3>
          </button>
          {this.state.textVisible && <h2>¡Look At It Go!</h2>}
        </div>
      </div>
    )
  }
}

export default ButtonSwitch
