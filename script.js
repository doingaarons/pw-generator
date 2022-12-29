const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
const containsUpperCaseElement = document.getElementById('containsUpperCase')
const containsNumberElement = document.getElementById('containsNumber')
const containsSpecialCharElement = document.getElementById('containsSpecialChar')
const displayPassword = document.getElementById('password-display')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

upperCaseCharacters = charCodeArray(65,90);
lowerCaseCharacters = charCodeArray(97,122);
numberCharacters = charCodeArray(49,57);
specialCharacters = charCodeArray(33,41);


form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let charAmountNum = characterAmountNumber.value
    let containsNumber = containsNumberElement.checked;  //true
    let containsSpecialChar = containsSpecialCharElement.checked; //true
    let containsUpperCase = containsUpperCaseElement.checked;
    const password = generatePassword(charAmountNum, containsUpperCase, containsNumber, containsSpecialChar)
    displayPw(password)
})

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

function generatePassword(charAmountNum, containsUpperCase, containsNumber, containsSpecialChar) {
    let charCode = lowerCaseCharacters //default value
    let allCharCodes = []
    if (containsUpperCase) charCode = charCode.concat(upperCaseCharacters);
    if (containsNumber) charCode = charCode.concat(numberCharacters);
    if (containsSpecialChar) charCode = charCode.concat(specialCharacters);



for (let i = 0; i < charAmountNum; i++)  {
    allCharCodes = allCharCodes.concat((randomizeChar(charCode)))

}
 return String.fromCharCode(...allCharCodes);

}


function charCodeArray(low, high) {
    let array = [];
    for (let i = low; i < high; i++)
    array.push(i)
    return array;
}


//use this function to randomize characters
function randomizeChar(el) {
    let randomCharacters = null;
    let index = Math.floor(Math.random() * el.length);
    let character = el[index];

    randomCharacters += character;
    return randomCharacters;
}

function displayPw(text) {
    displayPassword.innerText = text
}
