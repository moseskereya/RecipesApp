import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
       <section className="hero2">
        <div className="container">
        <h2 className="sub-headline">
        <span className="first-letter">W</span>elcome
        </h2>
        <h1 className="head-line">The Recipe</h1>
                <div className="description">
                    <div className="separator">
                        <div className="line line-left"></div>
                        <div className="asterisk">
                            <i className="fas fa-asterisk"></i>
                            <i className="fas fa-asterisk"></i>
                        </div>
                        <div className="line line-right"></div>
                    </div>
                     <div className="single-animation">
                         <Link to="/Recipes" class="button_home">
                          Explore 
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
