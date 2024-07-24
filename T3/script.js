function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById('celsius').value;
    if (celsiusInput === '') {
        alert('Please enter a valid number in Celsius.');
        return;
    }
    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
}

function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    if (fahrenheitInput === '') {
        alert('Please enter a valid number in Fahrenheit.');
        return;
    }
    const fahrenheit = parseFloat(fahrenheitInput);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
}

function clearInputs() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
}
