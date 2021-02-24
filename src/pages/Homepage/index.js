import { render } from '@testing-library/react';
import React, { Component } from 'react';
import FeaturedContent from '../../components/FeaturedContent';
import RecipeSubNav from './../../components/RecipeSubNav';
import './styles.scss';

class Homepage extends Component {
    /* componentDidMount() {
        window.addEventListener('click', this.handleClick)
    };

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick)
    }; */

    handleClick(e) {
        if(!e.target.matches('.joinBtn')){
            const dropdown = document.querySelector('.dropDownContent')
            if (dropdown.classList.contains('show')){
                dropdown.classList.remove('show');
            }
        }
    }
    render(){
        return(
            <section className="homepage">
                <RecipeSubNav />
                <FeaturedContent />
            </section>
        )
    }
}

export default Homepage;