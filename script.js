const form = document.getElementById('passwordGeneratorForm');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const includeUpperCaseElement = document.getElementById('includeUpperCase');
const includeLowerCaseElement = document.getElementById('includeLowerCase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const passwordShow = document.getElementById('password-show');

characterAmountNumber.addEventListener('input', syncCharacterAmount)

const UPPERCASE_CODES = arrayFromLowToHigh(65,90);
const LOWERCASE_CODES = arrayFromLowToHigh(97,122);
const NUMBER_CODES = arrayFromLowToHigh(48,57);
const SYMBOL_CODES = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126));

form.addEventListener('submit',e =>{
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUpperCase = includeUpperCaseElement.checked;
    const includeLowerCase = includeLowerCaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
   
    const password = generatePassword(characterAmount, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols)
    passwordShow.innerText = password;
})

function generatePassword(characterAmount, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols){
    let charCodes = LOWERCASE_CODES;
    if (includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES)

    const passwordCharacters = []
    for(let i = 0; i<characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high){
    const array = [];
    for(let i=low; i<=high; i++){
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e){
    const value = e.target.value;
    characterAmountNumber.value = value;
}