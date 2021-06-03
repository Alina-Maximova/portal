import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Rating from '../src/pages/rating'
import Home from '../src/pages/home'
import Authorization from '../src/pages/authorization'
import Estimation from '../src/pages/estimation'
import Mark from '../src/pages/mark'

import Footer from './components/footer';
import Admin from './pages/admin';
import { Button, Form, Container } from 'react-bootstrap'

import Header from './components/header';


function App() {
  return (
    <>

    <Container style={{right:'0', left:'0' , maxWidth:"100%"}}>
      <Header />
    </Container>
      
      <Container style={{maxWidth:"100%"}}>
        <Router>
        <Switch>
          <Route exact path="/" component={Home } />
          {/* <Route exact path="/chat" component={Chat} /> */}
          {/* <Route exact path="/rating" component={Rating} /> */}
          <Route exact path="/authorization" component={Authorization} />
          <Route exact path="/estimation" component={Estimation} />
          <Route exact path="/mark" component={Mark} />
          <Route exact path="/admin" component={Admin} />
          

        </Switch>
      </Router>
      </Container>

    </>
  );
}
 
export default App;
