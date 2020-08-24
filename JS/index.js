'use strict';

const chuckSays = document.getElementById('chuckSays');
const refreshButton = document.getElementById('refreshQuote');
const submitForm = document.getElementById('submitForm');
const defaultCategory = "dev"


const getQuote = (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    
    get(url).then(function(fetchResponse){
        chuckSays.innerHTML = fetchResponse.value;
    });
   
}



refreshButton.addEventListener("click", function(e) {
    e.preventDefault();
    getQuote(defaultCategory);
})

submitForm.addEventListener('click', function (e){
    e.preventDefault();
    const userInput = document.getElementById("categoryInput");
    const category = userInput.value;
    getQuote(category);
});

(function(){
    getQuote(defaultCategory)
})();

