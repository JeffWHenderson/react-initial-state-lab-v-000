import React from "react"
import ReactDom from "react-dom"

class Bomb extends React.Component {
  constructor() {
    super()

    this.state = {
      secondsLeft: 120
    }
  }


  render(){
    return (
      let time = this.state.secondsLeft
      <div>
        <h1>Boom!</h1>
      </div>
    )
  }
}

export default Bomb
