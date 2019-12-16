import React from 'react';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import SaveForm from "./components/SaveForm";

import {Provider} from 'react-redux';
import store from "./store";

function App() {
  const marginTop = {
    marginTop: "20px"
  };
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar/>
          <Container>
            <Row>
              <Col lg={12} style={marginTop}>
                <Switch>
                  <Route path="/" exact component={Welcome}/>
                  <Route path="/video/save" exact component={SaveForm}/>
                </Switch>
              </Col>
            </Row>          
          </Container>
        <Footer/>
      </Router>
    </Provider>  
  );
}

export default App;
