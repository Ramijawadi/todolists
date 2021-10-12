import React , { Component } from 'react';
import TodoItems  from './components/TodoItems/TodoItems';
import AddItems  from './components/AddItems/AddItems';


import './App.css';

class App  extends Component {

  state = {
    items :[

{id:1, name:'salah' , age:20 },
{id:2, name:'amine' , age:25 },
{id:3, name:'youssef' , age:30 }

    ]
  }


deleteItem = (id) => {

  let items = this.state.items.filter( items =>{  //filtrer les items pour supprimer
    
    return items.id !== id

  })
    this.setState({items}); // update items 
}


addItem = (item) => {
item.id = Math.random();
let items = this.state.items;
items.push(item);
this.setState({items})

}

  render(){
  return (
  <div className="App container">
    
    <h1  className="text-center" >todo list</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
      <AddItems addItem={this.addItem} />
     </div>
  );
}
}
export default App;
