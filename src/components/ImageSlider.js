import React from 'react'
import ReactDom from 'react-dom'

class ImageSlider extends React.Component {
  constructor() {
    super()

    this.state = {
      isEnabled: false
    }
  }

  render() {
    return(
        <div><h1>I am on slide CURRENT_SLIDE</h1></div>
    )
  }
}

export default ImageSlider
