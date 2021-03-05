import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from "../Spinner"
import { Consumer } from "./Context"
import Search from './Search';
class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { recipes } = value;
                    if (recipes === undefined || recipes.length === 0) {
                        return(
                            <Spinner/>
                        )
                    
                    } else {

                        return (
                            <React.Fragment>
                                <div className="hero">
                                    <div className="hero-clipped">
                                        <h4 className="hero-textbox">The Recipe</h4>
                                    </div>
                                </div>
                                <Search />
                                <div className="recipes">
                                    {recipes.map(item => (
                                    <div className="recipe">
                                        <Link to={
                                            { pathname: `/Details/${item.recipe.label}`, state: { items: item.recipe.label } }}>
                                            <img src={item.recipe.image} alt="recipe_img" />
                                            </Link>
                                        <h5 className="toggle_label">{item.recipe.label}</h5>
                                     </div>
                                ))}
                                </div>
                            </React.Fragment>
                        )
                    }

                }}
            </Consumer>
        );
    }
}

export default Recipes;
