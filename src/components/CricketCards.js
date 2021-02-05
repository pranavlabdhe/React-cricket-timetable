import { Button, Card, CardActions, CardContent,Grid} from '@material-ui/core'
import React from 'react'
import vs from '../images/vs.png'

const MyCard = ({ match })=>{
  
const getMatchCards=()=>{
    return(
        <div>
        <Card style={{ marginTop:50 }} className="Cards" >
            <CardContent>
                <Grid container justify="center"spacing={4}alignItems="center">
                    <Grid item>
                    <h3 className="teams">
               {match["team-1"]}
                </h3>
                    </Grid>
                    <Grid item>
              <img src={vs} style={{width:85}}alt="vs"/>    
                    </Grid>
                    <Grid item>
                    <h3 className="teams">
                    {match["team-2"]}
                </h3>
                    </Grid>
                </Grid>
                
            </CardContent>
            
            <CardActions>
            <Grid container justify="center">
                <Button variant="contained"color="primary" id="team2_btn">
                  Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                </Button>
                </Grid>
            </CardActions>
        </Card>
        </div>
    )
}
    return( 
    <div>
    {getMatchCards()}
    </div>
    )}
export default MyCard;