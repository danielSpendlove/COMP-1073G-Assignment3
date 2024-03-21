const output = document.getElementById('output');
const orderButton = document.querySelector('#order');
const studentInfo = document.getElementById('studentInfo');
const studentButton = document.querySelector('#displayStudentInfo')

//function that creates new pizza objects
function Pizza(name, size, cheese, crustType, toppings){
    this.name = name;
    this.size = size;
    this.cheese = cheese;
    this.crustType = crustType;
    this.toppings = toppings;
    //function to put all pizza properties in string
    this.pizzaDetails = function(){
        return `${this.name}'s ${this.size} pizza with ${this.cheese}, ${this.toppings.join(', ')} and ${this.crustType} crust.`;
    }
}
//Function that goes on click of order button
function orderPizza(){
    //variables for different pizza elements, values taken from form
    var nameSelected = document.getElementById('name').value;
    var sizeSelected = document.getElementById('size').value;
    var cheese = document.getElementById('cheese').value;
    // checks if the crust type is empty
    var crustTypeInput = document.querySelector('input[name="crustType"]:checked');
    if (crustTypeInput === null) {
        output.textContent = "Please select a crust type";
        return;
    }
    var crustTypeSelected = document.querySelector('input[name="crustType"]:checked').value;
    var toppingsSelected = [];
    var checkedTopping = document.querySelectorAll('input[type="checkbox"]:checked');
    //for loop to add all of the checked toppings to the toppingsSelected array
    for (let i = 0; i < checkedTopping.length; i++) {
        toppingsSelected.push(checkedTopping[i].name);
    }
    // Check if name is empty
    if (nameSelected === '') {
        output.textContent = "Please enter your name";
        return;
    } 
    // Create a new pizza object with the previously taken values
    let pizza = new Pizza(nameSelected, sizeSelected, cheese, crustTypeSelected, toppingsSelected);
    output.textContent = pizza.pizzaDetails();  
}
//function to display student info on page
function displayInfo(){
    studentInfo.textContent = '1228048 Daniel Spendlove'
}
//event listeners for order and student info buttons
orderButton.addEventListener('click', orderPizza);
studentButton.addEventListener('click',displayInfo);