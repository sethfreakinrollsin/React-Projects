import React ,{ Component }from 'react';
import { connect } from  'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { robots } from './robots';
import './App.css';
import Scroll from'../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
// import { render } from '@testing-library/react';
import {setSearchField,requestRobots} from '../actions'

// const state={
//     robots:robots,
//     searchfield:''
// }

//SearchField is going to be used as props comes from reducer 
const mapStateToProps=state=>{
    return{
        searchField: state.searchRobots.searchField,
        robots : state.requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error : state.requestRobots.error   
    }
}

//Dispatch triggers an action
const mapDispatchToProps=(dispatch)=>{
   return { 
       onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
       onRequestRobots:()=>dispatch(requestRobots())
    }
}

class App extends Component{

    componentDidMount(){
        this.props.onRequestRobots();
    }

    // onSearchChange = (event)=> {
    //     // enqueues changes to the component state and tells React 
    //     // that this component and its children need to be re-rendered with the updated state.
    //    this.setState({ searchfield: event.target.value });
       
    // }
   

    render(){
        const { searchField,onSearchChange,robots,isPending }=this.props;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // console.log('render(){}');
        if(isPending){
            return <h1>Loading .... </h1>
        }else{
        return(
            <div className="tc">
                <h1 className="f1"> RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);