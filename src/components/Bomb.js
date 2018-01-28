import React from "react"
import ReactDom from "react-dom"

class Bomb extends React.Component {
  constructor() {
    super()

    this.state = {
      initialCount: 120
    }
  }


  render(){
    return (
      <div>
        <h1>Boom!</h1>
      </div>
    )
  }
}

export default Bomb
