import React, {Component} from 'react';
import axios from 'axios'; 

export default class BeerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { beer: { id: props.match.params.id} };
    }

    componentDidMount() {
        this.fetchBeer();
    }

    fetchBeer() {
        return axios.get('http://api.brewerydb.com/v2/beer/' + this.state.beer.id, {
            params: {
                key: 'af9e8a6d55f59aa1afdde3f99f4a4528'
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET'
            }
        })
        .then((response) => {
            this.setState({
                beer: response.data.data
            });
        })
        .catch((error) =>  {
            this.setState({
                beer: {
                    name: "No beer found",
                    id: "No id found"
                }
            });
        });
    }

    render() {
        console.log(this.state);
        return (
            <h1>Got beer? =>  {this.state.beer.name} </h1>
        )
    }
}