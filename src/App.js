import React from 'react';
import './App.css';

import SearchBar from './SearchBar/searchBar'
import BookList from './BookList/booklist'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bookList: [],
      searchTerm: '',
      printType: 'all',
      bookType: ''
    }
  }
  
  updateSearchTerm(term){
    this.setState({
      searchTerm: term
    })
  }

  changePrintType = type => {
    this.setState({
      printType: type
    })
    this.handleSubmit()
  }

  changBookType = type => {
    this.setState({
      bookType: type
    })
    this.handleSubmit()
  }

  // comonentDidMount(){
  //   this.handleSubmit();
  // }

  handleSubmit = event => {
    event.preventDefault();

    const myKey=process.env.REACT_APP_API_KEY;
    const baseURL='https://www.googleapis.com/books/v1/volumes';
    const searchTerm = `${this.state.searchTerm}`;
    const printType =`${this.state.printType}`;
    const bookType = this.state.bookType.length ? `${this.state.bookType}` : '';


    const queryString = `${baseURL}?q=${searchTerm}&printType=${printType}&key=${myKey}`;

    fetch(queryString)
      .then(response => {
        if(!response.ok) {
          console.log('An error occured. Let\'s throw an error.');
          throw new Error('Something went wrong')
        }
        return response
      })
      .then(response => response.json())
      .then(data => {
        if (data){
          console.log(data);
            this.setState({
              bookList: data.items,
              error: null
            })
        } else {
          console.log('no search results')
        }
      })
      .catch(err => {
        console.log('Handling the error here.', err);
        this.setState({
          error: err.message
        })
      })
  }
  render(){
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleUpdate={term=>this.updateSearchTerm(term)}
          handleSubmit={this.handleSubmit}
          printType={this.state.printType}
          bookType={this.state.bookType}
          onChangePrintType={type => this.changePrintType(type)}
          onChangeBookType={type => this.ChangeBookType(type)}
           />
        <BookList 
          bookList={this.state.bookList}
          searchTerm={this.state.searchTerm} />
      </div>
    );

  }

}

export default App;