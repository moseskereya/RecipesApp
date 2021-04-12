import './App.css';
import { Provider } from './Components/Context';
import Recipes from './Components/Recipes';
import RecipeDetails from './Components/RecipeDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Nav from './Nav'
import Home from "./Components/Home"
import Footer from './Footer';
function App() {
    return (
        <Provider>
            <Router>
                <Nav />
                <React.Fragment>
                 <div className="Container">
                    <Switch>
                          <Route path="/" exact component={Home} />
                          <Route path="/Recipes/" component={Recipes} />
                          <Route path="/Details/:id" component={RecipeDetails} />
                    </Switch>
                    </div>
                </React.Fragment>
                <Footer/>
            </Router>
        </Provider>
  );
}

export default App;
