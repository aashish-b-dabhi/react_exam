import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';

const User = () => {
    const recipes = useSelector((state) => state.recipeReducer.recipe);

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <div className="row">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="col-md-3 my-3">
                            <div className="card h-100">
                                <img
                                    className="card-img-top"
                                    src={recipe.image}
                                    style={{ height: "150px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title">{recipe.recipeName}</h5>
                                    <p className="card-text">{recipe.desc}</p>
                                    <p className="card-text">RS  {recipe.price}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn btn-dark" style={{ width: "100%" }}>More Details</button>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default User;
