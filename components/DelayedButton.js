import React from 'react'

class DelayedButton extends React.Component {
  constructor(props) {
    super(props),

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
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


module.exports = DelayedButton;
