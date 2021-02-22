import comfort from './../assets/imgs/featured_content/left/comfort.jpeg';
import beef from './../assets/imgs/featured_content/left/beef.jpeg';
import stuffedpeppers from './../assets/imgs/featured_content/main/stuffedpeppers.jpeg';
import salad from './../assets/imgs/featured_content/right/salad.jpeg';
import sheetcakes from './../assets/imgs/featured_content/right/sheetcakes.jpeg';
import chicken from './../assets/imgs/featured_content/right/chicken.jpeg';
import skillet from './../assets/imgs/featured_content/right/skillet.jpeg';


const mainContentText = `We've picked a veritable peck of stuffed pepper recipes, each filled with assorted savory delights. These family-pleasing recipes are always delicious, and are budget-friendly, too.`


const featuredContentTypes = [
    [
        {
            title: '11 Comfort Food Dinners You\'ll Love',
            img: comfort
        },
        {
            title: '35 Beef Stronganoff Recipes',
            img: beef
        },
    ],
    {
        title: '10 Stuffed Pepper Recipes',
        text: mainContentText,
        img: stuffedpeppers
    },
    [
        {
            title: '15 Quick and Easy Side Salads',
            img: salad
        },
        {
            title: '13 Sheet Cakes You Won\'t Want to Share',
            img: sheetcakes
        },
        {
            title: '12 Easy Chicken Sheet Pan Dinners',
            img: chicken
        },
        {
            title: '11 Simple Skillet Dinners for Two',
            img: skillet
        }
    ]
];

export default featuredContentTypes;
