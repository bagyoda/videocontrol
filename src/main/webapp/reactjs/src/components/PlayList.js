import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';


class PlayList extends Component {
  render() {
    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Playlist</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                </tr>
            </tbody>
        </Table>
    );
  }
}

export default PlayList;