/* eslint-disable no-const-assign */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Nav extends Component {
    state = {
    }
    changeTheme = () => {
        const moon = document.querySelector('.fa-sun');
        moon.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        })
    }

    render() {
        return (

            <main>
                <nav>
                    <h3 className="title"><span>R</span>ecipe</h3>
                      <ul>
                        <Link className="link" to="/">
                            <li>Home</li>
                        </Link>
                        <Link className="link" to="/Recipes">
                            <li>Recipes</li>
                        </Link>
                        <li className="link">
                          <span>
                                <i className="fa fa-sun" onClick={this.changeTheme}></i>
                          </span>
                        </li>
                    </ul>
                </nav>
            </main>
        );
    }
}

export default Nav;