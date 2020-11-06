import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

//import Radium,{StyleRoot} from 'radium';
const StyleButton = styled.button`
    background-color:${props => props.alt ? 'red' : 'green' };
    color:white;
    fony:inherit;
    border:1px solid blue;
    padding:8px;

    &:hover {
      background-color:${props => props.alt ? 'orange' : 'yellow' };
      color:black;
    }`
class App extends Component{
  state ={
    persons:[
      {name:'Dipen', age:23},
      {name:'Ketul', age:25},
      {name:'Divya', age:24}
    ],
    otherState:'some other value',
    showPerson: false
  }
switchNameHandler = (newName) =>{
  //console.log("clicked");
  this.setState({
    persons:[
      { id: '1', name: newName, age:23},
      { id: '2', name:'KetulPatel', age:25},
      { id: '3', name:'DivyaPatel', age:24}
  ]
 });
 }

 nameChangeHandler = (event, id) =>{
   const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
   });
   const person = {
     ...this.state.persons[personIndex]
   };
  // const person = Object.assign({},this.state.persons[personIndex])
  
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( {persons: persons } )
 }

 togglePersonHandler = () =>{
  const doesShow = this.state.showPerson;
  this.setState({showPerson: !doesShow})
 }
 deletePersonHandler = (personIndex) =>{
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons})
}
 render(){
  
  let persons = null;
  if (this.state.showPerson){
    persons = (
      <div>
        {this.state.persons.map((person, index) =>{
          return <Person 
          click = {()=>this.deletePersonHandler(index)}
          name={person.name}
          age ={person.age}
          key = {person.id}
          changed={(event) => this.nameChangeHandler(event, person.id) } />
        })}
      
     </div> 
    );
    // style.backgroundColor = 'red';
    // style[':hover']={
    //   backgroundColor:'yellow',
    //   color:'black'
    // }
  }

  //let classes = ['red','bold'].join(' ');
  const classes =[];
  if(this.state.persons.length<=2){
    classes.push('red');
  }
  if(this.state.persons.length<=1){
    classes.push('bold');
  }
  return(
      <div className="App">
      <h1>HI THIS IS DEMO....</h1>
       <p className={classes.join(' ')}>This is paragraph</p>
       <StyleButton alt={this.state.showPerson}
        onClick={this.togglePersonHandler}>Toggle Person</StyleButton>
       { persons }   
  </div>
  );
}
};

export default App;
