<<<<<<< HEAD
import React from 'react';
import './App.css';
import BusinessList from './components/businessList/BusinessList';
import SearchBar from './components/searchBar/searchBar';
import Yelp from "./util/Yelp";


class App extends React.Component{

constructor(props){
  super(props);
 this.state={
   businesses:[]

 }
  this.searchYelp=this.searchYelp.bind(this);
}

  searchYelp(term,location,sortBy){
    
    Yelp.search(term,location,sortBy).then(businesses=>{
      this.setState({
        businesses:businesses
      })
    })
    
   

  }
  render(){

    return (
      <div className="App">
    <h1>help</h1>
    <SearchBar  searchYelp={this.searchYelp}/>
    <BusinessList businesses={this.state.businesses}/>
  </div>
    );

  
=======
import React from "react";
import "./App.css";
import BusinessList from "./components/businessList/BusinessList";
import SearchBar from "./components/searchBar/searchBar";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ "vertical-align": "middle" }}>
          helpp!
          <img
            style={
              ({ width: 2 + "em" },
              { height: 3 + "em" },
              { "vertical-align": -20 + "px" })
            }
            src="https://s3-media0.fl.yelpcdn.com/assets/public/yelp_burst.yelp_styleguide.yji-4374c8fd03d15660aa2c54f2ba9b43ba.svg"
            alt=""
          />
        </h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
>>>>>>> bf3493d031ba4d934f95204cb527448aee047f2f
  }
};

export default App;
