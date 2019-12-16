import React from "react";
import {Jumbotron, Container, Row, Col} from "react-bootstrap";
import PlayList from "../components/PlayList";
import AvailableVideos from "../components/AvailableVideos";

class Welcome extends React.Component {
  render() {
    return(
      <Container>
        <Jumbotron className="bg-dark text-white">
          <h4>Dear Visitor,</h4>
          <p>
            Hereby you can create videos and add them to playlist.
          </p>
        </Jumbotron>
        <Row>
          <Col><PlayList/></Col>
          <Col><AvailableVideos/></Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;