// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: ""
  }

  handleOnChange = ({target}) => {
    this.setState({
      name: target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <input type="text" onChange={this.handleOnChange} name="name" value={this.state.name}></input>
            <input type="submit"/>
          </form>
        </div>
    )
  }
}

export default BandInput
