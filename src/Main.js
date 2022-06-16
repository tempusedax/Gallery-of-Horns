import React from "react";
import Hornedbeast from "./Hornedbeast";
// import data from './data.json'
import './Main.css'
import { Container, Row } from 'react-bootstrap';



class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, index) => {
        return <Hornedbeast
        title={beast.title}
        imageurl={beast.image_url}
        description={beast.description}
        key={index}
        addlikes={this.props.addlikes}
        handleOnShowModal={this.props.handleOnShowModal}
        beast= {beast} 
        />

  });

    return (
      <main>
        <Container>
          <Row xs={1} sm={2}md={3} lg={4}>
          {beasts}
          </Row>
        </Container>
      </main>
    )
  }
}


export default Main;