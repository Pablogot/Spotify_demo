import React, { Component } from 'react';
import queryString from 'query-string';

const MyContext = React.createContext();


/* 😀 here all the state related stuff lives  */

export class Provider extends Component {
    constructor() {
        super();
        this.state = {
            serverData:{}
        };
    }

    componentDidMount() {
        const parsed = queryString.parse(window.location.search);
        const token = parsed.access_token;

        fetch(
            'https://api.spotify.com/v1/me',{
                headers:{ 'Authorization': `Bearer ${token}`}
        })
        .then((response) => response.json())
        .then(data => storeUserData(data))
        
        const storeUserData = (data)  => {
            const serverData = {...this.state.serverData},
                { display_name } = data;
            serverData['userName'] = display_name;
            this.setState({ serverData });
        };

        fetch(
            'https://api.spotify.com/v1/me/playlists',{
                headers:{ 'Authorization': `Bearer ${token}`}
        })
        .then((response) => response.json())
        .then(data => storePlaylistData(data))
        
        const storePlaylistData = (data)  => {
            const serverData = {...this.state.serverData},
                { items } = data;
            serverData['playlist'] = items;
            this.setState({ serverData });
            console.log(data);
        };
    }

 
    render() {
        return (
            <MyContext.Provider value={
                {
                    serverData: this.state.serverData,
                }
            }> {this.props.children} </MyContext.Provider>
        )
    }
}
export const Consumer = MyContext.Consumer;
