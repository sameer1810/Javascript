const form = document.querySelector('form');
// the below usecase will give you empty value of height
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {  //click is not event beacuse it is form hence it is submit event
  
e.preventDefault();//because it is directly sents the result to the browser so we are stopping the default event of form

  const height = parseInt(document.querySelector('#height').value);//convert string to int
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);//toFixed(2) will give two dogit after decimal
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});