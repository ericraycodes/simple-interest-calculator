// Accessing DOM objects
const principalAmount   = document.querySelector('.principal-amount');
const interestRate      = document.querySelector('.interest-rate');
const interestDisplay   = document.querySelector('.interest-rate-display');
const years             = document.querySelector('.years');
const computeButton     = document.querySelector('.compute-button');
const section           = document.querySelector('section');
const owner             = document.querySelector('.owner');


// Displaying the value of the interest rate slider input
interestDisplay.textContent = interestRate.value + '%';
interestRate.addEventListener('input', () => interestDisplay.textContent = interestRate.value + '%');


// Event listener: compute button
computeButton.addEventListener('click', validatePrincipalInput);


// Validating the input of the principal amount
function validatePrincipalInput() {
    /* 
    Conditions: if the principal amount is a:
        (+)positive number, 
        (-)negative number,
        (i)invalid-nonnumeric input, or
        (e)catching other unidentified input errors.
    */

    console.log(`==== COMPUTATION ====`);
    
    if (parseFloat(principalAmount.value, 10) > 0) {

        displayCalculation();

    } else {
        console.log('Negative, Invalid Characters, Empty Input field');
        console.log(`Principal Input Data type: ${typeof(principalAmount.value)}`);
        console.log(`Principal amount = '${principalAmount.value}'.`);

        alert('Enter a positive number');   
        
        while(section.firstChild) {
            section.removeChild(section.firstChild);
        }
    }
}

 
// Displaying the Result of Calculation
function displayCalculation() {
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const para4 = document.createElement('p');
    const value1 = document.createElement('output');
    const value2 = document.createElement('output');
    const value3 = document.createElement('output');
    const value4 = document.createElement('output');

    para1.textContent = 'If you deposit ';
    para2.textContent = 'at an interest rate of ';
    para3.textContent = 'You will receive an amount of ';
    para4.textContent = 'in the year ';
    value1.textContent = principalAmount.value + ',';
    value2.textContent = interestRate.value + '%,';
    value3.textContent = calculateFutureAmount() + ',';
    value4.textContent = new Date().getFullYear() + parseFloat(years.value);

    section.appendChild(para1);
    section.appendChild(para2);
    section.appendChild(para3);
    section.appendChild(para4);
    para1.appendChild(value1);
    para2.appendChild(value2);
    para3.appendChild(value3);
    para4.appendChild(value4);

    console.log(section.innerHTML); // check
    console.log(section.innerText); // check
}


// Future amount calculation
function calculateFutureAmount() {
    return parseFloat(principalAmount.value, 10)*(interestRate.value/100)*parseFloat(years.value, 10);
}

// Display the web app owner in the footer
document.querySelector('.owner').textContent = document.querySelector('meta[name="author"]').content;


