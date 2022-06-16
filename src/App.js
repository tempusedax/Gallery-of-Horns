import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from './data.json';
import SelectedBeast from './SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './Main.css'
import './Hornedbeast.css'
import Hornedbeast from './Hornedbeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: ''
    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleOnShowModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast
    });
  };

  render() {
    return (
      <>
        <Header/>
        <Main data={data}
        handleOnShowModal={this.handleOnShowModal}
        />
        <SelectedBeast
         showModal={this.state.showModal}
         onHide={this.handleOnHide}
         selectedBeast = {this.state.selectedBeast}
        />
        <Hornedbeast/>
        <Footer/>
      </>
    );
  }
}

export default App;