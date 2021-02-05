import React, { useEffect,useState,Fragment } from 'react'
import './App.css';
import MyCard from './components/CricketCards';
import Navbar from './components/Navbar';
import { getMatches } from './api/Api'
import { Grid } from '@material-ui/core';
function App() {
  const [matches,setMatches] = useState([]);
  useEffect(()=>{
    getMatches()
    .then((data)=>{
      setMatches(data.matches)
      console.log(data.matches);
    })
    .catch(error => console.log(error));
  },[]);

  return (
    <div className="App">
      <Navbar/>
      <h1 id="featured_matches">MATCHES TIMINGS</h1>
      <h2 className="Match_type">TESTS</h2>      
        <Grid container>
          <Grid sm="2"></Grid>
          <Grid sm="8">
          {matches.map((match)=>(
            <Fragment> 
          {match.type === "Tests"?(
            <MyCard key={match.unique_id} match={match}/>):("")}
            </Fragment>
          ))}
          </Grid>
        </Grid>
  
       <h2 className="Match_type">T20</h2>
       <Grid container>
          <Grid sm="2"></Grid>
          <Grid sm="8">
          {matches.map((match)=>(
            <Fragment> 
          {match.type === "Twenty20"?(
            <MyCard key={match.unique_id} match={match}/>):("")}
            </Fragment>
          ))}
          </Grid>
        </Grid>

        <h2 className="Match_type">ODI</h2>
       <Grid container>
          <Grid sm="2"></Grid>
          <Grid sm="8">
          {matches.map((match)=>(
            <Fragment> 
          {match.type === "ODI"?(
            <MyCard key={match.unique_id} match={match}/>):("")}
            </Fragment>
          ))}
          </Grid>
        </Grid>
      {/* <h1>Cricket Info</h1> */}
      {/* <Button variant="contained" id="sign_up">
<span>sign up</span>
</Button> */}
    </div>
  );
}

export default App;
