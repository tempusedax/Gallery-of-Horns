
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
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

  handleHeadlineClick = () => {
    this.props.handleOnShowModal(this.props.title);
  }

  render() {
      return (
        <Col className="mt-4">
          <Card className="h-100 p-3">
            <Card.Title onClick={this.handleHeadlineClick}>{this.props.title}</Card.Title>
            <p>♥️{this.state.favorite} Love</p>
            <Button onClick={this.handleFavs}>My Favorites! </Button>
            <Card.Img 
              src={this.props.imageurl}
              alt={this.props.description}
              title={this.props.title}
              onClick={() => {this.props.handleOnShowModal(this.props.beast)}}
            />
          </Card>
        </Col>

      // <article>
      //   <h2>{this.props.title}</h2>
      //   <p>{this.props.description}</p>
      //   <p> ♥️ {this.state.favorite} Favorites</p>
      //   <img
      //     src={this.props.imageurl}
      //     alt={this.props.description}
      //     title={this.props.title}>
      //   </img>
      //   <Button onClick={this.handleFavs}>Favorites</Button>
      // </article>
    )
  }
}


export default Hornedbeast;