console.log("hitesh")
const buttons = document.querySelectorAll('.button');//retun NodeList
const body = document.querySelector('body');

buttons.forEach(function (button) { //we can apply forEach loop on NodeList
  console.log(button);
  button.addEventListener('click', function (e) {//e is event object
    console.log(e);
    console.log(e.target);//e.target gives from where this even occurs-->mtlb button dega jis btn pr click krne se ye hua hai
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});