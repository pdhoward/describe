import React from "react";
import Button from '../components/Button'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
      <Button>
          <h1>Counter</h1>
          <p>current count: {this.state.count} </p>
          <br></br>
          <button
            onClick={() =>
              this.setState(prevState => ({
                count: prevState.count + 1,
              }))
            }
          >
            plus
          </button>
          <br></br>
          <button
            onClick={() =>
              this.setState(prevState => ({
                count: prevState.count - 1,
              }))
            }
          >
            minus
          </button>
        </Button>
      </div>
    )
  }
}

export default Counter
