import React from 'react';
import {
  Link
} from 'react-router-dom'
import axios from 'axios'; 

export default class BeerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { beers: []};
  }

  componentDidMount() {
    this.BeerList();
  }

  BeerList() { 
    return axios.get('http://api.brewerydb.com/v2/search', {
        params: {
          q: 'a',
          key: 'af9e8a6d55f59aa1afdde3f99f4a4528'
        }, headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET'
        }
      })
      .then((data) => {
        this.setState({ beers: data.data.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const beers = this.state.beers.map((item, i) => {
      return <li key={item.id} className="collection-item avatar"> <Link to={'/beers/' + item.id}>
          {item.labels && item.labels.icon && <img src={item.labels.icon} className="circle" />}
          <span className="title">{item.nameDisplay}</span>
          <p> <span> {item.abv} </span></p>
        </Link>
      </li>
    });

    return <ul className="collection" > 
      {beers}
    </ul>
  }
}