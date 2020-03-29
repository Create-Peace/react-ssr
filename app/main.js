import React from 'react'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    window.alert('onclick')
  }

  render () {
    return <div onClick={this.handleClick} >hello world</div>
  }
}