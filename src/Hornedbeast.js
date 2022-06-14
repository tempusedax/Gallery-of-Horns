import React from "react";


class Hornedbeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src="img_girl.jpg" alt="Girl in a jacket" title="500"></img>
      </article>
    )
  }
}


export default Hornedbeast;