import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default class CustomizedSnackbars extends Component {

  state ={
    open:false
  }
  //const [open, setOpen] = React.useState(false);

/*   const handleClick = () => {
    setOpen(true);
  };
*/
handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  //setOpen(false);
  this.setState.state({open:false})
}; 
 // setOpen(props.show)
 ShouldComponentsUpdate(nextProps, nextState){
    if(nextProps.show !== this.props.show) return true
    else  return false
 }
  render ()
    {
       // const classes = useStyles();
       console.log("i am a duck")
    return (
    <div >

      <Snackbar 
            open={this.props.show} 
            autoHideDuration={5000} 
             onClose={this.handleClose} >

        <Alert onClose={this.handleClose}  severity={this.props.severity}>
          {this.props.msg}
        </Alert>
      </Snackbar>
    </div>)}
  
}
