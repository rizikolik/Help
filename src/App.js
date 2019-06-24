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
  }
}

export default App;
