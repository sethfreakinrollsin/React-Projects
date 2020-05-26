import React ,{Component}from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';
// import { render } from '@testing-library/react';

// const state={
//     robots:robots,
//     searchfield:''
// }

class App extends Component{
    constructor(){
        //Super is Consturctor of parent
        super()
        //State is like prop but ulike it it is at Parent level
        this.state={
            robots:robots,
            searchfield: ''
        }
    }

    onSearchChange = (event)=> {
        // enqueues changes to the component state and tells React 
        // that this component and its children need to be re-rendered with the updated state.
       this.setState({ searchfield: event.target.value });
    }
   

    render(){
        const filteredRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1"> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
// const App=()=>{
//     return(
//         <div className="tc">
//             <h1> RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>
//         </div>
//     );   
// }
}
export default App;