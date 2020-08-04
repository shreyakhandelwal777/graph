import React from 'react';

import Card from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';
import './Pie.css'



function Button1(){

  return (
    <Card>
      
        <div className="p2">
          <Typography component="h5" variant="h5">
            total request
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <h2>234567</h2>
          </Typography>
        </div>
    </Card>
  );
}
export default Button1