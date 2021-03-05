import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();

 const reducer = (state, action) => {
        switch (action.type) {
            case 'Recipes_Search':
                return {
                    ...state,
                    recipes: action.payload,
                    heading: 'Search Results'
                };
            default:
               return state;
        }
    }

export class Provider extends Component {
    state = {
        recipes: [],
        heading: "Recipes from Search results",
        dispatch: action => this.setState(state => reducer(state, action))
    }

    
    componentDidMount = () => {
        const app_id = "d0021928";
        const api_key = "3c5a85a012ba1a0db1c2a1899694b6dc";
        const endpoint = `https://api.edamam.com/search?q=recipes&app_id=${app_id}&app_key=${api_key}&from=0&to=100&health=alcohol-free`;
        axios.get(endpoint)
            .then(res => {
                this.setState({ recipes: res.data.hits })
            })
            .catch(err => {
                console.log(err)
        })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;