import React from 'react'
import ReactDom from 'react-dom'

class ImageSlider extends React.Component {
  constructor() {
    super()

    this.state = {
      currentSlide: 0
    }
  }

  render() {
    return(
        <div><h1>I am on slide {this.state.currentSlide}</h1></div>
    )
  }
}

export default ImageSlider
