import React from 'react';
import Main from './components/Main';
import Aside from './components/Aside';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 800 });
  }

  render (){
    return (
      <BrowserRouter>
        {this.state.isDesktop ? (
          <Aside />
        ):<Navbar />}      
        <Main />   
      </BrowserRouter>
    );
  }

}

export default App;
