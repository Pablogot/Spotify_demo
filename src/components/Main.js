import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Grid, Typography } from '@material-ui/core';
import Sidebar from './Sidebar'
import Content from './Content'

const styles = {
    gridFirsItem:{
        background: grey[400],
    }
};
function Main(props) {
    const { classes } = props;
    return (
            <Grid container justify='center'>
                <Grid item item xs={4}>
                    <Sidebar />
                </Grid>
                <Grid item item xs={8}>
                    <Content />
                </Grid>
            </Grid>
    );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);



