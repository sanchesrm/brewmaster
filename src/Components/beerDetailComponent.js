import React, {Component} from 'react';
import axios from 'axios'; 
import ReactLoading from 'react-loading';

export default class BeerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { beer: { id: props.match.params.id} };
    }

    componentDidMount() {
        this.fetchBeer();
    }

    componentWillMount() {
        this.setState({ beer: { id: this.state.beer.id  }, status:"FETCHING" })
    }

    fetchBeer() {
        setTimeout(() => 
            axios.get('http://api.brewerydb.com/v2/beer/' + this.state.beer.id, {
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
                    beer: response.data.data,
                    status:"COMPLETED"
                });
            })
            .catch((error) =>  {
                this.setState({
                    beer: {},
                    status:"NOT_FOUND"
                });
            }), 2000);
    }

    render() {
        return (
            <div class="col-md-12">
            {this.state.status === "NOT_FOUND" &&  
                <h1>NOT FOUND</h1>
            }
            {this.state.status === "FETCHING" &&  
                <div class="col-md-12 center"><ReactLoading type="cubes" color="black" height={667} width={375} /></div>
            }
            {this.state.status === "COMPLETED" &&  
                <h1>{this.state.beer.name} </h1>
            }
            </div>
        )
    }
}