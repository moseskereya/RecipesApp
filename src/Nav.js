import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Nav extends Component {
    state = {}

    changeTheme = () => {
        const moon = document.querySelector('.fa-moon');
        moon.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        })
    }

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
                        <li className="link">
                          <span>
                             <i className="fa fa-moon" onClick={this.changeTheme}></i>
                          </span>
                        </li>
                    </ul>
                </nav>
            </main>
        );
    }
}

export default Nav;