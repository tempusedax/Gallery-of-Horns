import React from "react";
import Button from 'react-bootstrap/Button';
import './Hornedbeast.css'
// render all names and images




class Hornedbeast extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {
      favorite: 0
    };
  };

  handleFavs =  () => {
    this.setState({
      favorite: this.state.favorite + 1
    })
  }



  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p> ♥️ {this.state.favorite} Favorites</p>
        <img
          src={this.props.imageurl}
          alt={this.props.description}
          title={this.props.title}>
        </img>
        <Button onClick={this.handleFavs}>Favorites</Button>
      </article>
    )
  }
}


export default Hornedbeast;