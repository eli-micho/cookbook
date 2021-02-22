import React from 'react';
import FeaturedContent from '../../components/FeaturedContent';
import RecipeSubNav from './../../components/RecipeSubNav';
import './styles.scss';

const Homepage = () => {
    return(
        <section className="homepage">
            <RecipeSubNav />
            <FeaturedContent />
        </section>
    );
};

export default Homepage;