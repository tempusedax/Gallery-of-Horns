import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from './data.json';
import SelectedBeast from './SelectedBeast'
import Forms from './Forms'
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
      selectedBeast: '',
      sortedData: data
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

  handlesubmit = event => {

    let selected = event.target.value;
    if (selected === '1') {
      let newData = data.filter(num => num.horns === 1);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '2') {
      let newData = data.filter(num => num.horns === 2);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '3') {
      let newData = data.filter(num => num.horns === 3);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '100') {
      let newData = data.filter(num => num.horns === 100);
      this.setState({
        sortedData: newData
      });
    } else {
      this.setState({
        sortedData: data
      });
    }
  }



  








  render() {
    return (
      <>
        <Header />
        <Forms handlesubmit={this.handlesubmit}/>
        <Main data={this.state.sortedData}
          handleOnShowModal={this.handleOnShowModal}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          onHide={this.handleOnHide}
          selectedBeast={this.state.selectedBeast}
          horns={this.state.selectedBeast.horns}
        />
        <Hornedbeast />
        <Footer />
      </>
    );
  }
}

export default App;