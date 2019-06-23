import React from 'react';
import './App.css';
import BusinessList from './components/businessList/BusinessList';
import SearchBar from './components/searchBar/searchBar';
class App extends React.Component{
  render(){

    return (
      <div className="App">
    <h1>help</h1>
    <SearchBar />
    <BusinessList />
  </div>
    );

  }
}




export default App;
