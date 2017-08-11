import React from 'react';
import axios from 'axios'; 

export default class BeerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { beers: []};
  }

  componentDidMount() {
    console.log("mounting...");
  }
  
  componentWillMount() {
    //this.BeerList();
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
        console.log(data.data);
        this.setState({ beers: data.data.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const beers = this.state.beers.map((item, i) => {
      return <div key={item.id}>
        <div></div>
        <span>{item.nameDisplay}</span>
        <span>{item.abv}</span>
      </div>
    });

    return <div>
      {beers}
    </div>
    // return <div id="layout-content" className="layout-content-wrapper">
    //   <div className="panel-list">{ beers }</div>
    // </div>
    // return <div>
    //         <Pagination items={10} activePage={2} maxButtons={8}>
    //           {beers}
    //         </Pagination>
    //       </div>
  }
}