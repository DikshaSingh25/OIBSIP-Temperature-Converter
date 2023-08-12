const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', () => {
  const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
  const unitSelect = document.getElementById('unitSelect');
  const selectedUnit = unitSelect.value;

  if (!isNaN(temperatureInput)) {
    if (selectedUnit === 'celsius') {
      resultDiv.textContent = `${temperatureInput} °C is ${celsiusToFahrenheit(temperatureInput)} °F and ${celsiusToKelvin(temperatureInput)} K`;
    } else if (selectedUnit === 'fahrenheit') {
      resultDiv.textContent = `${temperatureInput} °F is ${fahrenheitToCelsius(temperatureInput)} °C and ${fahrenheitToKelvin(temperatureInput)} K`;
    } else if (selectedUnit === 'kelvin') {
      resultDiv.textContent = `${temperatureInput} K is ${kelvinToCelsius(temperatureInput)} °C and ${kelvinToFahrenheit(temperatureInput)} °F`;
    }
  } else {
    resultDiv.textContent = 'Please enter a valid temperature.';
  }
});

// Conversion functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit + 459.67) * 5 / 9;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return (kelvin * 9 / 5) - 459.67;
}

