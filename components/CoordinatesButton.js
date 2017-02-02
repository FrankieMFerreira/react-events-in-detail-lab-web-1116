import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props),

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var coordinatearray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinatearray)
  }

  // forFocus(){
  //   console.log('Good!')
  // }
  //
  // forBlur(){
  //   console.log('Hey! Eyes on me!')
  // }

  render() {
    return(
      <button onClick={this.handleClick}>A button!</button>
    )
  }
}


module.exports = CoordinatesButton;
