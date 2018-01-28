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
    let time = this.state.secondsLeft
    return (
      <div>
        <h1>{time}</h1>
      </div>
    )
  }
}

export default Bomb
