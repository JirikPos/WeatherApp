/****** SearchBar animation ******/ 
const input = document.querySelector('.SearchBar input');
const placeholderText = input.getAttribute('placeholder');

const cityNames = [
    'London',
    'Paris',
    'Berlin',
    'Madrid',
    'Rome',
    'Vienna',
    'Prague',
    'Athens',
    'Lisbon'
];

const cityNameLength = cityNames[0].length; // Get the length of the city names

let currentCityIndex = 0;
let typingTimeout;

function typeCity(cityName) {
    const typingSpeed = 80; // Typing animation speed (adjust as needed)

    let currentCharIndex = 0;
    input.placeholder = ''; // Clear the placeholder before typing new city name

    function typeNextChar() {
        input.placeholder = cityName.slice(0, currentCharIndex);
        currentCharIndex++;

        if (currentCharIndex <= cityNameLength) {
            typingTimeout = setTimeout(typeNextChar, typingSpeed);
        } else {
            setTimeout(deleteCity, 1000); // Wait 1 second before starting delete animation
        }
    }

    typeNextChar();
}

function deleteCity() {
    const deletingSpeed = 40; // Deleting animation speed (adjust as needed)

    let currentCharIndex = input.placeholder.length;

    function deleteNextChar() {
        input.placeholder = input.placeholder.slice(0, currentCharIndex);
        currentCharIndex--;

        if (currentCharIndex >= 0) {
            typingTimeout = setTimeout(deleteNextChar, deletingSpeed);
        } else {
            currentCityIndex = (currentCityIndex + 1) % cityNames.length; // Move to the next city name
            const newCityName = cityNames[currentCityIndex];
            setTimeout(() => typeCity(newCityName), 1000); // Wait 1 second before starting the next typing animation
        }
    }

    deleteNextChar();
}

function startAnimation() {
    if (input.value.trim() === '') {
        const newCityName = cityNames[currentCityIndex];
        typeCity(newCityName);
    }
}

function stopAnimation() {
    clearTimeout(typingTimeout);
}

// Start the typing animation when the script executes
startAnimation();

// Stop the animation when the user types in the input
input.addEventListener('input', stopAnimation);


/****** Option Buttons ******/ 
function handleButtonClick(buttonNumber) {
    const btn1 = document.getElementById('OptionPanelBtn1');
    const btn2 = document.getElementById('OptionPanelBtn2');
  
    if (buttonNumber === 1) {
      btn1.classList.add('checked');
      btn2.classList.remove('checked');
    } else if (buttonNumber === 2) {
      btn2.classList.add('checked');
      btn1.classList.remove('checked');
    }
  }
