import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue, green, grey } from '@material-ui/core/colors';
import { Grid, Typography } from '@material-ui/core';

const styles = {
    gridItem:{
        background: grey[800],
        padding: 8
    },
    topTypography:{
        color: green[400],
        fontSize: 14
    },
    gridContent:{
        background: grey[300],
        padding: '20px 8px',
        height: '80vh'
    }
};

function Content(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <Grid className={classes.gridItem} >
                <Typography variant="title" className={classes.topTypography}>
                    Spotify demo API
                </Typography>
            </Grid>
            <Grid className={classes.gridContent} color="secondary">
            <Typography variant="body1" color="primary">
                    Spotify demo API
                </Typography>
            </Grid>
        </React.Fragment>
    );
    
}
Content.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Content);