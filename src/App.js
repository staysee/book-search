import React from 'react';
import './App.css';

import Search from './Search/search'
import BookList from './BookList/booklist'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bookList: [],
      searchTerm: '',
      printType: 'magazines',
      bookType: 'No Filter'
      
    }
  }
  
  updateSearchTerm(term){
    this.setState({
      searchTerm: term
    })
  }

  // comonentDidMount(){
  //   this.handleSubmit();
  // }

  handleSubmit = event => {
    event.preventDefault();

    const myKey=process.env.REACT_APP_API_KEY;
    const baseURL='https://www.googleapis.com/books/v1/volumes';
    const query = `${this.state.searchTerm}`
    const printType=`${this.state.printType}`


    const queryString = `${baseURL}?q=${query}&printType=${printType}&key=${myKey}`;

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
        <Search 
          searchTerm={this.state.searchTerm}
          handleUpdate={term=>this.updateSearchTerm(term)}
          handleSubmit={this.handleSubmit}
           />
        <BookList 
          bookList={this.state.bookList}
          searchTerm={this.state.searchTerm} />
      </div>
    );

  }

}

export default App;