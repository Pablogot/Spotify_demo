import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue, green, grey} from '@material-ui/core/colors';
import { Grid, Typography } from '@material-ui/core';
import { Consumer } from '../MyContext';


const styles = {
    gridTop:{
        background: green[400],
        padding: 8
    },
    topTypography:{
        color: grey[50],
        fontSize: 14
    },
    gridContent:{
        background: grey[200],
        padding: '20px 8px',
        minHeight: '80vh'
    }
};

function Sidebar(props) {
    const { classes } = props;
    return (
        <Consumer>
            { value => {
                const{ playlist, userName } = value.serverData;
                return(
                    <React.Fragment>
                        <Grid className={classes.gridTop} color="secondary">
                            <Typography variant="title" className={classes.topTypography}>
                                {userName}
                            </Typography>
                        </Grid>
                        <Grid className={classes.gridContent} color="secondary">
                        <Typography variant="title">
                            Playlist:
                        </Typography>
                        {
                            ( playlist || [] ).map( index => (
                                <Typography key={index.name} variant="body1">
                                - {index.name}
                                </Typography>
                            ))
                        }
                            
                        </Grid>
                    </React.Fragment>
                )
                
            }}
        </Consumer>
        );
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Sidebar);
  
  