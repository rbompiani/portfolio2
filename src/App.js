import React from 'react';
import Main from './components/Main';
import Aside from './components/Aside';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SlideDrawer from './components/SlideDrawer';
import {BrowserRouter} from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      slideDrawerOpen: false
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
    this.setState({ isDesktop: window.innerWidth > 767 });
  }

  drawerButtonClickHandler = ()=>{
    this.setState((prevState) => {
      return{slideDrawerOpen: !prevState.slideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({slideDrawerOpen: false});
  };

  render (){
    let slideDrawer;
    let backdrop;

    if (this.state.slideDrawerOpen){
      slideDrawer=<SlideDrawer drawerClickHandler={this.drawerButtonClickHandler}/>;
      backdrop=<Backdrop click={this.backdropClickHandler}/>;
    }
    
    return (
      <BrowserRouter>
        {this.state.isDesktop ? (
          <Aside />
        ):<Navbar drawerClickHandler={this.drawerButtonClickHandler}/>}      
        <Main isDesktop={this.state.isDesktop} />
        {slideDrawer}
        {backdrop}
      </BrowserRouter>
    );
  }

}

export default App;
