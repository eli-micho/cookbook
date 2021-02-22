import React from 'react';
import RecipeCategoryCard from './RecipeCategoryCard';
import './styles.scss';

//Helpers
import categoryTypes from './../../helpers/category.types';

const RecipeSubNav = () => {
    return (
        <div className="recipeSubNav">
            <div className="subheader">
                <div className="subSearchIngredient">
                        <a>Search by ingredient</a>
                </div>
                
                <div className="categoryCards">
                    <ul>
                        {categoryTypes.map(item => {
                            return <RecipeCategoryCard category={item} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecipeSubNav;
