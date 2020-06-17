import React, { Component } from 'react'

class TestInput extends Component {
  myRef = React.createRef()
  state = {
    value: '',
    count: 0,
  }
  setRef = (ref: any) => {
    console.log('===============setRef')
    this.myRef = ref
  }
  onchange = (e: any) => {
    console.log(e.target.value)
    this.setState({ value: e.target.value })
  }
  render() {
    return (
      <div>
        <input ref={this.setRef} type="text" onChange={this.onchange} />
        <div>{this.state.count}</div>
        <div>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>button</button>
        </div>
      </div>
    )
  }
}

export default TestInput
