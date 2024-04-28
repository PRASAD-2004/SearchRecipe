import React, { useState,useEffect,useRef} from "react";
import '../App.css'
import jsonData from './recipe_data.json'
import Recipe from "./recipecard";
import Recipedetails from "./recipedetails";



function SearchBar() {
    const [search, setSearch] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const display = (recipe)=>{
        setSelectedRecipe(recipe)
        return(selectedRecipe)
    }

    const ref = useRef(null);

    useEffect(() => {
        if (selectedRecipe) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [selectedRecipe]);

    const handleChange = (e) => {
        const searchQuery = e.target.value;
        setSearch(searchQuery);
    }

    console.log(search);

    const filteredRecipes = jsonData.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div id="bar">
            <h1>Search Recipes</h1>
            <input onChange={handleChange} id='search' type="text" placeholder="Search"/>

            <div id="parentcard">
                {filteredRecipes.map((recipe) => (
                    <div key={recipe.id} onClick={() => display(recipe)}>
                        <Recipe data={recipe} />
                    </div>
                ))}
            </div>

            <div ref={ref}></div>
            {selectedRecipe && <Recipedetails data={selectedRecipe} />}
        </div>


    );
};

export default SearchBar;
