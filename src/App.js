import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ToolbarTop from './components/ToolbarTop';
import Main from './components/Main';
import {Provider,Consumer} from './MyContext'

import { green, grey, red } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: { main: grey[900] }, 
        secondary: { 
            light: green[300],
            main: green[500],
            dark: green[700],
            contrastText: '#fff',
         },
        error: { main: red[500]},
        top: { main: red[100]}
    },
});


export default class App extends Component {
    render() {
        return (
            <Provider>
                <MuiThemeProvider theme={theme}>
                    <ToolbarTop />
                    <Main />
                </MuiThemeProvider>
            </Provider>
        );
    }
}



