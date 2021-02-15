import React, { Component } from 'react';
import axios from "axios"
import {Consumer} from "./Context"
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { Title: '' }
    }

    OnChangeState = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    SearchRecipe = (dispatch, e) => {
        e.preventDefault();
        const app_id = "d0021928";
        const api_key = "3c5a85a012ba1a0db1c2a1899694b6dc";
        const endpoint = `https://api.edamam.com/search?q=${this.state.Title}&app_id=${app_id}&app_key=${api_key}&from=0&to=100&health=alcohol-free`;
        axios.get(endpoint)
          .then(res => {
              dispatch({
                  type: 'Recipes_Search',
                  payload:res.data.hits
              })
         })
        .catch(err => {
          console.log(err)
        })
    }

    render() { 
        return (
            <Consumer>
                {value => {
                    const { dispatch} = value
                    return (
                        <div className="search">
                            <h4>Search Recipes Make one for your Self</h4>
                            <form onSubmit={this.SearchRecipe.bind(this, dispatch)}>
                                <input type="text" name="Title"
                                    placeholder="Enter your Search here"
                                    onChange={this.OnChangeState}
                                />
                                <button type="submit" className="submit">
                                   <i className="fa fa-search"></i>
                                </button>
                            </form>
                     </div>
                    )
                }}
           </Consumer>
         );
    }
}
 
export default Search;