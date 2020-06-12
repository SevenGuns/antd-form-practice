import React from 'react'
import TestComp3 from './TestComp3'

function test<Key>(x: number, y: number): number {
  return x + y
}

export default class Test5 extends React.PureComponent {
  state = {
    user: { name: 'zhou' },
    count: 0,
  }

  abc: MyClass = { name: '999' }

  onClickPlus = () => {
    this.setState(
      (state: any, props) => {
        return { count: state.count + 1 }
      },
      () => {
        console.log('res', this.state.count)
      }
    )
    console.log('state.count', this.state.count)
  }
  render() {
    const { user, count } = this.state
    return (
      <div>
        <TestComp3 user={user}></TestComp3>
        <div>
          <button
            onClick={() => {
              user.name = '888'
              this.setState({ user })
            }}
          >
            click A
          </button>
        </div>
        <div>
          <div>
            <div>{count}</div>
            <button onClick={this.onClickPlus}>+++</button>
          </div>
        </div>
        <div>
          <div>abc</div>
          {this.abc.name}
        </div>
      </div>
    )
  }
}
