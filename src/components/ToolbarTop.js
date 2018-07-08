import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography,TextField,InputAdornment } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../logo.svg';
import Player from './Player'

const styles = {
    root: {
        flexGrow: 1,
    },
    toolBar:{
        height: 48,
        padding: '0 30px',
        justifyContent: 'space-between'

    },
    appLogo:{
        marginTop: 95
    },
    textField: {
        background: grey[600],
        borderRadius: '4px',
        borderBottom: '0px',
        height: 48,
        width: 200,
    },
    bootstrapRoot: {
        padding: 0,
    },
    bootstrapInput: {
    fontSize: 16,
    },
    bootstrapFormLabel: {
    fontSize: 18,
    }
};


function ToolbarTop(props) {
    const { classes } = props;
    return (
    <div className={classes.root}>
        <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar} >
            <img src={logo} className={classes.appLogo} alt="logo" />
            <Player />
        </Toolbar>
        </AppBar>
    </div>
    );
}

ToolbarTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolbarTop);