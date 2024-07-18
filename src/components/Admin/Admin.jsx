import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    DELETE_RECIPE_PENDING,
    GET_RECIPE_PENDING,
    POST_RECIPE_PENDING,
    UPDATE_RECIPE_PENDING,
} from "../../redux-saga/admin/action";
import Navbar from "../Navbar";

function Admin() {
    const [view, setView] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();
    const image = useRef()
    const recipeName = useRef();
    const price = useRef();
    const desc = useRef();

    const result = useSelector((state) => state.recipeReducer);

    useEffect(() => {
        dispatch({ type: GET_RECIPE_PENDING });
    }, [dispatch]);

    function addRecipe() {
        const recipe = {
            image: image.current.value,
            recipeName: recipeName.current.value,
            price: price.current.value,
            desc: desc.current.value,
        };
        console.log(recipe);
        dispatch({ type: POST_RECIPE_PENDING, payload: recipe });
    }

    function deleteRecipe(id) {
        dispatch({ type: DELETE_RECIPE_PENDING, payload: id });
    }

    function viewData(recipe) {
        setView(recipe);
    }

    function handle(e) {
        setView({ ...view, [e.target.name]: e.target.value });
    }


    function updateRecipe() {
        dispatch({ type: UPDATE_RECIPE_PENDING, payload: view });
    }


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };


    const filteredRecipes = result.recipe.filter(recipe =>
        recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (searchTerm === '' || recipe.recipeName.toLowerCase().startsWith(searchTerm.toLowerCase()))
    );

    return (
        <div className="Admin">
            <Navbar handleSearch={handleSearch} />

            <div className="container mt-4">
                <div className="row mb-5">
                    <div className="col">
                        <input type="text" ref={image} placeholder="Recipe image" />
                    </div>
                    <div className="col">
                        <input type="text" ref={recipeName} placeholder="Recipe Name" />
                    </div>
                    <div className="col">
                        <input type="number" ref={price} placeholder="Price" />
                    </div>
                    <div className="col">
                        <input type="text" ref={desc} placeholder="Description" />
                    </div>
                    <div className="col">
                        <button className="btn btn-dark" onClick={addRecipe}>Add Recipe</button>
                    </div>
                </div>


                <div class="modal" id="exampleModal" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="recipeName">Recipe Image:</label>
                                    <input
                                        type="text"
                                        id="recipeName"
                                        name="recipeName"
                                        value={view.image}
                                        onChange={handle}
                                        class="form-control"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="recipeName">Recipe Name:</label>
                                    <input
                                        type="text"
                                        id="recipeName"
                                        name="recipeName"
                                        value={view.recipeName}
                                        onChange={handle}
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="price">Price:</label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={view.price}
                                        onChange={handle}
                                        class="form-control"
                                        step="0.01"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="desc">Description:</label>
                                    <textarea
                                        id="desc"
                                        name="desc"
                                        value={view.desc}
                                        onChange={handle}
                                        class="form-control"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={updateRecipe}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="mt-4">Recipe List</h2>
                <table className="table table-striped table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Recipe Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecipes.map((val) => (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td><img src={val.image} width={40} height={40} className='rounded-circle' /></td>
                                <td>{val.recipeName}</td>
                                <td>{val.price}</td>
                                <td>{val.desc}</td>
                                <td>
                                    <button className="btn btn-dark me-2" onClick={() => deleteRecipe(val.id)}>Delete</button>
                                    <button className="btn btn-dark" onClick={() => viewData(val)} data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;



