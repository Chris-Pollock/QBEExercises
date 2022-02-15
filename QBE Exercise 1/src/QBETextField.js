import {TextField} from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';

function QBETextField(props) {
  return <React.Fragment>
          <TextField id="standard-basic" variant="standard" disabled={props.disabled} value={props.value}/>
          {props.ticked && <DoneIcon style={{color:props.tickColor}}></DoneIcon>}
  </React.Fragment>
}

export default QBETextField;
