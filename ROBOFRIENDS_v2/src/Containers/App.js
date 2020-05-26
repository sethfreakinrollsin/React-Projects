import React ,{Component}from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { robots } from './robots';
import './App.css';
import Scroll from'../Components/Scroll';
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
            robots:[],
            searchfield: ''
        }
        // console.log('Constructor');
    }
    componentDidMount(){
        //Fetching Data from JSON File
        fetch("https://jsonplaceholder.typicode.com/users")
        //then()
        //response
        //.json()
        .then(response=>response.json())
        .then(users=>
            this.setState({'robots':users})
        );
        // console.log('ComponentDidMount()');
    }

    onSearchChange = (event)=> {
        // enqueues changes to the component state and tells React 
        // that this component and its children need to be re-rendered with the updated state.
       this.setState({ searchfield: event.target.value });
       
    }
   

    render(){
        const {robots,searchfield}=this.state;
        const filteredRobots=robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // console.log('render(){}');
        if(!robots.length){
            return <h1>Loading .... </h1>
        }else{
        return(
            <div className="tc">
                <h1 className="f1"> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
        }
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