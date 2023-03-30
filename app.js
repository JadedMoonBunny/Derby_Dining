/* API */
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => displayCocktail(data))
  .catch((error) => console.error("FETCH ERROR:", error));

function displayCocktail(data) {

  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById("cocktail");    

  // cocktail name
  const cocktailName = cocktail.strDrink;
  const heading = document.createElement("h1");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);

  // cocktail image
  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strDrinkThumb;
  cocktailDiv.appendChild(cocktailImg);

  // coctail ingredients
  const cocktailIngredients = document.createElement("ul");
  cocktailDiv.appendChild(cocktailIngredients);

  const getIngredients = Object.keys(cocktail)
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
    }, {});

  for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("li");
    listItem.innerHTML = value;
    cocktailIngredients.appendChild(listItem);
  }

}


 /*Registration Form*/
 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');
 
 form.addEventListener('submit', e => {
     e.preventDefault();
 
     validateInputs();
 });
 
 const setError = (element, message) => {
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');
 
     errorDisplay.innerText = message;
     inputControl.classList.add('error');
     inputControl.classList.remove('success')
 }
 
 const setSuccess = element => {
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');
 
     errorDisplay.innerText = '';
     inputControl.classList.add('success');
     inputControl.classList.remove('error');
 };
 
 const isValidEmail = email => {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }
 
 const validateInputs = () => {
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const password2Value = password2.value.trim();
 
     if(usernameValue === '') {
         setError(username, 'Username is required');
     } else {
         setSuccess(username);
     }
 
     if(emailValue === '') {
         setError(email, 'Email is required');
     } else if (!isValidEmail(emailValue)) {
         setError(email, 'Provide a valid email address');
     } else {
         setSuccess(email);
     }
 
     if(passwordValue === '') {
         setError(password, 'Password is required');
     } else if (passwordValue.length < 8 ) {
         setError(password, 'Password must be at least 8 character.')
     } else {
         setSuccess(password);
     }
 
     if(password2Value === '') {
         setError(password2, 'Please confirm your password');
     } else if (password2Value !== passwordValue) {
         setError(password2, "Passwords doesn't match");
     } else {
         setSuccess(password2);
     }
 
 };