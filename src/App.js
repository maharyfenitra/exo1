import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@mui/material/';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function App() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
            <AccessAlarmIcon/>
            <Typography variant="h6 ">
            Hello React!
            </Typography>
        </Toolbar>
      </AppBar>
      <main>
      <Container maxWidth="md">
      
      <Grid container spacing={4}>
      <Grid item style={{margin:"10px"}}>
          <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Task 1" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Task 2" />
        </FormGroup>
      </Grid>
      </Grid>
      </Container>
      
      </main>
        
      
    </>
  );
}

export default App;
