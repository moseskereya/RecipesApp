import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Nav extends Component {
    state = {}
    render() {
        return (

            <main>
                <nav>
                    <h1 className="title"><span>R</span>ecipe</h1>
                      <ul>
                        <Link className="link" to="/">
                            <li>Home</li>
                        </Link>
                        <Link className="link" to="/Recipes">
                            <li>Recipes</li>
                        </Link>
                    </ul>
                </nav>
            </main>
        );
    }
}

export default Nav;