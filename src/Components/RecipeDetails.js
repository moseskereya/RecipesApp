import React, { Component } from 'react';
import axios from "axios"
import Spinner from "../Spinner"
import { Link } from 'react-router-dom'
class RecipeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            single: []
        }
    }

    componentDidMount() {
        const app_id = "d0021928";
        const api_key = "3c5a85a012ba1a0db1c2a1899694b6dc";
        const q = this.props.location.state.items;
        const endpoint = `https://api.edamam.com/search?q=${q}&app_id=${app_id}&app_key=${api_key}`
        axios.get(endpoint)
            .then(response => {
                this.setState({ single: response.data.hits[0].recipe })
                console.log(this.state.single)
            })
            .catch(error => {
                console.log("No data from api !!", error)
       })
    }

    render() {
        const data = this.state.single;

        if (data === undefined  || Object.keys(data).length === 0 ) {
            return <Spinner />
        } else {
            return (
                <React.Fragment>
                    <div className="detail-container">
                        <div className="detail">
                            <img src={data.image} alt="image_detail_recipe" />
                        </div>
                            <div className="content_details">
                            <h3>{data.label}</h3>
                            <img src="../images/divider-free-img-1.png" alt=""/>
                              <div className="More">
                                    <h3>More Details</h3>
                                    <h5>HealthLabels</h5>
                                    <span>
                                       {data.healthLabels}
                                   </span>
                                <h5>Ingredients</h5>
                                <span>
                                    {data.healthLabels}
                                </span>
                            </div>
                                <div>
                                    <a href={data.url}>
                                    <button className="btn cta-btn">Read More</button>
                                    </a>
                                    <Link to="/Recipes" class="btn cta-btn">
                                        Back
                                </Link>
                                </div>
                             <br/>
                        </div>
                    </div>
                    <div className="how_to_cook">
                        <h5>How to prepare {data.label}</h5>
                        <h2>Items Requred</h2>
                        <div className="prepare">
                           <p>{data.ingredientLines}</p>
                        </div>
                        <div className="items_prepared">
                        {data.ingredients.map(item => (
                            <div className="ingredients">
                                <img src={item.image} alt="" />
                                <p>{item.text}</p>
                            </div>
                        ))}
                     </div>
                    </div>
                </React.Fragment>
            );
        }

    }
}

export default RecipeDetail;