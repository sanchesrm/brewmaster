import React, {Component} from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import BeerDetail from './beerDetailComponent.js'
import BeerList from './beerListComponent.js'

export default class CustomRouter extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/beers/:id" component={BeerDetail} />
                <Route path="/" component={BeerList} />
            </div>
        </BrowserRouter >
    );
  }
}