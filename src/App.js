import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hornedbeast from './Hornedbeast';
import './App.css'
import './Main.css'
import './Hornedbeast.css'

class App extends React.Component {


  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;