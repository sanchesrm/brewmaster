import React, {Component} from 'react';

export default class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {id: props.match.params.id};
}
  render() {
    return (
        <h1>"Hello" {this.state.id} </h1>
    )
  }
}