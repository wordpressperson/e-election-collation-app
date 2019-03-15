import React, { Component } from 'react';
<<<<<<< HEAD
import AddStateResult from './components/Layouts/AddStateResult.jsx';
import DisplayStateResults from './components/Layouts/DisplayStateResults.jsx';
import ViewCollation from './components/Layouts/ViewCollation.jsx';
import ViewResults from './components/Layouts/ViewResults.jsx';
import Datasource from './components/Datasource.jsx'

import {Link} from 'react-router-dom'

class App extends Component {

state = {
  nameofstate: '',
  apcVotes: '',
  pdpVotes: '',
  flag: 0,

  voteState: {},
  stateVote: []
	}

  componentDidMount() {
    this.setState({stateVote: Datasource})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.addstateVote(this.state.nameofstate, this.state.apcVotes, this.state.pdpVotes);
    e.target.pdpVotes.value=''
    e.target.apcVotes.value=''
    this.setState({flag: 1})
  }

  addstateVote=(nameofstate, apcVotes, pdpVotes)=>{
    const newStateVotes=[...this.state.stateVote, {nameofstate, apcVotes, pdpVotes}]
    this.setState({stateVote:newStateVotes})


    const getAPCTotal = newStateVotes.reduce((sum, a) => {
      if(!sum.apcVotes) sum.apcVotes = 0;
      if(!sum.pdpVotes) sum.pdpVotes = 0;
      sum.pdpVotes += parseInt(a.pdpVotes)
      sum.apcVotes += parseInt(a.apcVotes)
      return sum;
      }, {})  

      this.setState({voteState: getAPCTotal})
  }

  compileCollation=()=>{
    
  }

   // getAPCTotal = this.state.stateVote.reduce((sum, a) => {
   //  if(!sum.apcVotes) sum.apcVotes = 0;
   //  if(!sum.pdpVotes) sum.pdpVotes = 0;
   //  sum.pdpVotes += parseInt(a.pdpVotes)
   //  sum.apcVotes += parseInt(a.apcVotes)
   //  return sum;
   //  }, {})

=======
import NavBar from './components/Layouts/NavBar.jsx';
import ViewCollation from './components/Layouts/ViewCollation.jsx';
import MainContent from './components/Layouts/MainContent.jsx';
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {

>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28
  render() {
    const DisplayStateResult=this.state.stateVote.map(function (datasource, index) {
            return (<DisplayStateResults 
              key={index} 
              name={datasource.nameofstate} 
              apcVotes={datasource.apcVotes} 
              pdpVotes={datasource.pdpVotes}
              />)
          })

    return (
<<<<<<< HEAD
      <div className="container">
        <div className="container">
          <AddStateResult 
            handleChange={this.handleChange} 
            nameofstate={this.state.nameofstate} 
            apcVotes={this.state.apcVotes}
            pdpVotes={this.state.pdpVotes}
            handleSubmit={this.handleSubmit}
            />
            <br />
            <table className="table">
            <caption><h4>Collated Results</h4></caption>
            <thead>
              <tr className="info">
                <th width='100'>State</th>
                <th width='50'>APC</th>
                <th width='50'>PDP</th>
              </tr>
            </thead>
            </table>

            {DisplayStateResult}

            {this.state.flag===1 && <ViewResults Total={this.state.voteState} flag={this.state.flag}/>}
          </div>
=======
      <Provider store={store}>
      <div className="App">
        <NavBar />
        <MainContent />          
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28
      </div>
      </Provider>
    );
  }
}

export default App;