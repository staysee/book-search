import React from 'react';
import './App.css';

import SearchBar from './SearchBar/searchBar'
import BookList from './BookList/booklist'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bookList: [],
      searchTerm: 'henry',
      printType: '',
      bookType: ''
    }
  }
  

  updateSearchTerm(term){
    this.setState({
      searchTerm: term
    })
  }

  updatePrintType(printType){
    this.setState({
      printType: printType
    })
  }

  updateBookType(bookType){
    this.setState({
      bookType: bookType
    })
  }

  
  handleSubmit(e){
    e.preventDefault();

    const myKey=process.env.REACT_APP_API_KEY;
    const baseURL='https://www.googleapis.com/books/v1/volumes';
    const searchTerm = `${this.state.searchTerm}`;
    const printType = this.state.printType.length ? `&printType=${this.state.printType}` : '';
    const bookType = this.state.bookType.length  ? `&filter=${this.state.bookType}` : '';


    let url = `${baseURL}?q=${searchTerm}${printType}${bookType}&key=${myKey}`;
    
    if (this.state.printType.length > 0 ){
      url = `${url}&printType=${this.state.printType}`;
    }

    if (this.state.bookType.length > 0){
      url = `${url}&filter=${this.state.bookType}`;
    }

    const options ={
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }

    fetch(url, options)
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
          updateSearchTerm={term => this.updateSearchTerm(term)}
          updatePrintType={type => this.updatePrintType(type)}
          updateBookType={type => this.updateBookType(type)}
          handleSubmit={event =>this.handleSubmit(event)}
           />
        <BookList 
          bookList={this.state.bookList} />
      </div>
    );

  }

}

export default App;