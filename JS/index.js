'use strict';

const chuckSays = document.getElementById('chuckSays');
const refreshButton = document.getElementById('refreshQuote');
const submitForm = document.getElementById('submitForm');
let category = "dev"


const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    
    get(url).then(function(fetchResponse){
        chuckSays.innerHTML = fetchResponse.value;
    });
   
}
//dynamic categories
const getCategories = () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropdownMenu = document.getElementById("categoryInput");
    //filtering explicit & religion quotes as an option
    get(url).then(function (categoryArray) {
        const filterArray = categoryArray.filter(function (category) {
        return category !== 'explicit' && category !== 'religion' });
         filterArray.map(function (category) {
           const categoryOption = document.createElement('option');
           categoryOption.value = category;
           categoryOption.text = category;
           
           
           dropdownMenu.append(categoryOption);
       });
    });
}

refreshButton.addEventListener("click", function(e) {
    e.preventDefault();
    getQuote();
})


const getChuckQuotes = document.getElementById("getChuckQuotes");
getChuckQuotes.addEventListener('submit', e => {
    e.preventDefault();
    const userInput = document.getElementById("categoryInput");
    category = userInput.value;
    getQuote();
});


(function(){
    getCategories();
    getQuote()
})();

