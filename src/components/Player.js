import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    
};


function Player(props) {
    const { classes } = props;
    return (
        <h1>Player</h1>
    )
}

Player.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Player);