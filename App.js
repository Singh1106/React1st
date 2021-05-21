import React, {Component} from 'react';
import logo from './logo.svg';
import {CardList} from './components/card_list/card-list-component.jsx';
import './App.css';
import {SearchBox} from './components/search-box/search-box-component.jsx';

class App extends Component {
  constructor(){
    super();
    this.state={
      string: 'Hello Noni',
      string2: 'I am gonna change this text.',
      humans: [
        {
          name:'Jaswinder Singh '
        },
        {
          name:'Yashik Mahajan '
        },
        {
          name:'Abhiraj Singh '
        },
        {
          name:'Jaspreet Singh Jandu '
        }
      ],
      searchField: ''
    }
  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value});
  }
  // Basically a class method and its an arrow function so its already binded to the class.
  // Its weird in JS. We have to bind class functions in constructor otherwise they won't work.
  // Arrow functions do it automatically.

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => this.setState({humans:users}));
  }
  render(){
    const humans=this.state.humans;
    const searchField=this.state.searchField;
    const filteredHumans=humans.filter(human=>
      human.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={()=>this.setState({string: 'Hello Meetu',string2: 'Changed'})}>
            {this.state.string2}!!!!!!          </button>
          <br/>
          <button onClick={()=>this.setState({string: 'Hello Noni',string2: 'I am gonna change this text.'})}>
            {this.state.string2}
          </button>
        </header>
        <SearchBox placeholder='Search humans' handleChange={this.handleChange}/>
        <CardList humans={filteredHumans}/>
      </div>
    );
  }
}

export default App;
