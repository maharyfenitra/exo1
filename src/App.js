import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@mui/material/';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

function App() {
  const [newTask,setNewTask] = useState(""); 
  const [taskList,setTaskList]=useState(["Task 1","Task 2"]);
  const handleClick = ()=>{
    setTaskList([...taskList,newTask]);
  }
  
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
              {taskList.map((task)=><FormControlLabel control={<Checkbox defaultChecked />} label={task} />)}
              
              <TextField value={newTask} onChange={(e)=>{setNewTask(e.target.value);}}
                  required
                  id="outlined-required"
                  label="New Task"
                  defaultValue="New task"
              />
              <Button size="small" variant="contained" style={{marginTop:"20px"}} onClick={()=> handleClick()} color="primary">
                    Save task
              </Button>
        </FormGroup>
      </Grid>
      </Grid>
      </Container>
      
      </main>
        
      
    </>
  );
}

export default App;
