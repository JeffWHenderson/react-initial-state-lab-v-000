import React from "react"
import ReactDom from "react-dom"

class Bomb extends React.Component {
  constructor() {
    super()

    this.state = {
      isEnabled: false
    }
  }


  render(){
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default Bomb
